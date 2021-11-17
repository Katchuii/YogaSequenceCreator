
import { IUserData, IAsana } from "./typemodels";

// HA wie funktioniert play()?
// HA2 Gong-Sound download, icon einbauen
// audacity: Sprach-memo
// txt-to-speech js-lib?
// auf aktive asana klicken um ablauf zu stoppen, neue asana auswählen können



export class SequenceCreatorView {
    form: HTMLFormElement;
    formData: FormData;
    rangeSlider;
    sequenceDurationDiv: HTMLElement;
    intermediateRadio: any;
    themeRadio;
    userData: IUserData;
    onFormSubmit: Function;
    interval: any;
    activeItem: number;
    counter: number = 0;
    scrollIntoViewOptions: ScrollIntoViewOptions = {behavior : "smooth", block: "start"};
    gongSound : HTMLAudioElement;
   

    constructor() {
        // set default values for level, duration & theme:
        this.intermediateRadio = document.getElementById('intermediate');
        this.intermediateRadio.checked = true;
        this.rangeSlider = document.getElementById("sequence_duration");
        this.rangeSlider.value = 90;
        this.themeRadio = document.getElementById('equilibrium');
        this.themeRadio.checked = true;
        this.gongSound = new Audio('./sound/Meditation-bell-sound.mp3');
        this._initRangeSlider();

        /**
         * User Choices in Form are submitted
         */
        document.querySelector('form').addEventListener('submit', event => {
            event.preventDefault();
            this.getUserChoice();
            this.onFormSubmit();
        });

        /**
         * when Reset-Button is clicked, the sequence-container will be removed from sight,
         * the current sequence is paused
         * counter (for progressbar) resetted
         */
        document.getElementById("reset-sequence").addEventListener('click', event => {
            console.log("doubleclick");
            document.querySelector("body").classList.remove("sequence-container__visible");
            document.querySelector("body").dataset.visiblePage = "landingpage";
            this.pause();
            this.counter = 0;
        })

        /**
         * when play-button is clicked, the sequence will be started
         */
        document.getElementById("controls-play").addEventListener('click', event => {
            this.play();
        });

        /**
         * when pause-button is clikced, the seqeunce will be paused
         */
        document.getElementById("controls-pause").addEventListener('click', event => {
            this.pause();
        })

        document.getElementById("audio").addEventListener('click', event => {
            console.log("audio")
            if(document.querySelector("body").classList.contains("app-muted")) {
                this.unmute();
            } else {
                this.mute()
            }
        })
    }

    /**
     * called in Controller
     * @param callback - a Function inside Controller to bind sequence to View
     * @return {void}
     */
    bindFormSubmit(callback: Function) {
        this.onFormSubmit = callback;
    }

    /**
     * @returns {IUserData} - users choice from FormData for filtering Asana-Pool
     */
    public getUserChoice() : IUserData {
        this.formData = new FormData(document.querySelector('form'));
        this.userData = {
            // Rückgabewerte aus Form into numbers (gut weil in asana-datei auch alles numbers/ später kann man mit Prüfsumme arbeiten....)
            level: parseInt(this.formData.get('level').toString()),
            options: this.formData.getAll('options_ckb').map((o) => { return parseInt(o.toString()); }),
            theme: parseInt(this.formData.get('theme').toString()),
            duration: parseInt(this.formData.get('duration').toString())
        };
        return this.userData;
    }

    /**
     * finds Rangeslider and adds change-event
     * sets Duration to an initial value (of 90)
     */
    _initRangeSlider() {
        var _this = this;
        this.sequenceDurationDiv = document.getElementById("sequence_duration_value");
        this.rangeSlider.addEventListener('change', event => {
            _this.sequenceDurationDiv.innerHTML = (<HTMLInputElement>event.target).value;
        });
    }
    
    /**
     * creates List of Asanas and adds Progressbar to active List-Item
     * @param asanaSequence - filtered List of Asanas ready to be rendered
     * @param ol - ordered list where Asana-list-items get attached to
     * @todo - Zeile 130 in appendChilds ändern , um Asana img flexibel einfügen zu könnne  (für media queries!)
     */
    addListItems(asanaSequence: IAsana[], ol : HTMLOListElement) {
        let _this = this;
        asanaSequence.forEach((asana, index) => {
            let li = document.createElement("li");
            let progress = document.createElement("progress");
            progress.classList.add("progressbar");
            progress.value = 0;
            progress.max = _this.calcTime();
            let img = document.createElement("img");
            let counterElem = document.createElement("span");
            counterElem.classList.add("counterElem");
            counterElem.innerHTML = (index + 1).toString();
            img.src = 'img/IMG_1724.JPG';
            img.classList.add("asanaPic");
            li.innerHTML = img.outerHTML + "<div class='asana-title-bar'>" + counterElem.outerHTML + "<div><span class='asanaName'>" + asana.name + "</span><span class='asanaName'>" + asana.titel + "</span></div>" + progress.outerHTML + "</div>";
            li.classList.add("asanas");
            if(index == 0) {
                li.classList.add("asana-active");
            }
            li.id = 'li_' + index;
            ol.appendChild(li);
        });
    }

    /**
     * calls addListItems()
     * @param {IAsana[]} asanaSequence - resets old asana-sequence, renders new one
     * @returns container with asana-sequence
     */
    renderSequence(asanaSequence: IAsana[]) : HTMLElement {
        let container : HTMLElement = document.getElementById("sequence-container");
        let existingList = container.querySelector("ol");
        if (existingList) {
            existingList.remove();
        }
        let ol : HTMLOListElement= document.createElement("ol");
        ol.classList.add("sequence");
        this.addListItems(asanaSequence, ol);
        container.appendChild(ol);
        document.querySelector("body").classList.add("sequence-container__visible");
        document.querySelector("body").dataset.visiblePage = "playlist";
        return container;
    }
    
    /**
     * @todo can be shortened by giving radio-buttons same name and read value
     * @returns the duration of 1 Asana according to User-Choice ""level"
     */
    calcTime(): number {
        let radioBeginner = document.getElementById('beginner') as HTMLInputElement;
        let radioInter = document.getElementById('intermediate') as HTMLInputElement;
        let radioAdvanced = document.getElementById('advanced') as HTMLInputElement;
        if (radioBeginner.checked) {
            return 6;
        }
        if (radioInter.checked) {
            return 12;
        }
        if (radioAdvanced.checked) {
            return 18;
        }
    }


    /**
     * activates timer/css-class on progressbar of active asana-listitem
     * makes sure active item is always visisible on screen
     * plays gongsound after each Asana
     * @todo - Funktion für Pause zwischen den Asanas (mit Counter z.B. oder TimeOut) mit gelber Progressbar
     */
    play() {
        let maxTime = this.calcTime();
        let listItems = document.querySelectorAll("li");
        for (let i = 0; i < listItems.length; i++) {
            if(listItems[i].classList.contains("asana-active")) {
                this.activeItem = i;
            } 
        }
        this.interval = setInterval(() => {
            this.counter += 1;
            listItems[this.activeItem].querySelector("progress").value = this.counter;
            if(this.counter >= maxTime) {
                if(this.activeItem == listItems.length -1) {
                    console.log("Ende")
                    this.pause();
                    document.querySelector(".asana-active").classList.remove("asana-active");
                    listItems[0].classList.add("asana-active");
                    this.activeItem = 0;
                    listItems[this.activeItem].scrollIntoView(this.scrollIntoViewOptions);
                    this.counter = 0;
                }
                else {
                    document.querySelector(".asana-active").classList.remove("asana-active");
                    this.gongSound.pause();
                    this.gongSound.currentTime = 0;
                    this.gongSound.play();
                    listItems[this.activeItem + 1].classList.add("asana-active");
                    listItems[this.activeItem + 1].scrollIntoView(this.scrollIntoViewOptions);
                    this.counter = 0;
                    this.activeItem += 1;
                    listItems[this.activeItem - 1].querySelector("progress").value = 0;
                }
            }
        }, 1000);
        document.querySelector('body').classList.add("sequence-is-playing");
    }

    /**
     * pauses a running sequence
     */
    pause() {
        document.querySelector('body').classList.remove("sequence-is-playing");
        clearInterval(this.interval);
    }

    mute() {
        document.querySelector("body").classList.add("app-muted");
        this.gongSound.muted = true;
    }

    unmute() {
        document.querySelector("body").classList.remove("app-muted");
        this.gongSound.muted = false;
    }
}

export default SequenceCreatorView;
