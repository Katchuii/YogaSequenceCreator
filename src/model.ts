import asanas from './asanas.js';
import { IAsana, IUserData } from "./typemodels";

export class SequenceCreatorModel {
    asanas: IAsana[];
    filteredAsanas: IAsana[];
    //url : string;
    asanaJson : {};
    stillMissing: number;
    stillMissing2: number;
    userData: IUserData;
    constructor() {
        //this._fetchAsanas('./asanas.json');
        this.asanas = asanas;
        let json = JSON.stringify(asanas);
//         let jsonObject = Object.assign(...empArray.map(key => Object.values(key)).map(value => ({ [value[0]]: value[1] })));  
// let json = JSON.stringify(jsonObject);  
// console.log(empArray);  
// console.log(json);  
    }

    /**
     * calls filter-functions with user-data from user-choice
     * @todo - nochmal aufsplitten und sinnvolleren Namen geben
     * @param {IUserData} data 
     * @returns final Asana-Sequence
     */
    setUserData(data: IUserData){
        this.userData = data;
        this.filteredAsanas = this.asanas.slice(); //so clont man einen Array
        this.filterVariations();
        this.filterLevel();
        this.calcAsanaAmount();
        let themeAsanas = this.selectAsanaByTheme();
        let fullAsanaArray = this.fillUpSequence(themeAsanas);
        let orderedAsana = this.sequenceOrder(fullAsanaArray)
        return orderedAsana;
    }

    /**
     * filters Asanas that are basic Asanas and not variations
     * @return {void}
     */
    filterVariations(): void {
        if (this.userData.options[0] === 1) {
            let filteredAsanas = [];
            this.filteredAsanas.forEach((asana) => {
                if (!asana.isVariation) {
                    filteredAsanas.push(asana);
                }
            });
            this.filteredAsanas = filteredAsanas;
        }
    }

    /**
     * filters Asana-Pool for Level according to User-Choice
     */
    filterLevel(): void {
        let filteredAsanas = [];
        this.filteredAsanas.forEach((asana) => {
            let _this = this;
            if (asana.level === _this.userData.level) {
                filteredAsanas.push(asana);
            }
        });
        this.filteredAsanas = filteredAsanas;
    }

    /**
     * calculates the amount of asanas per sequence
     * @returns {number} - the amount of Asana per Sequence according to duration
     */
    calcAsanaAmount(): number {
        let asanaAmount: number;
        switch (this.userData.duration) {
            case 30: asanaAmount = 4;
                break;
            case 45: asanaAmount = 6;
                break;
            case 60: asanaAmount = 8;
                break;
            case 75: asanaAmount = 10;
                break;
            case 90: asanaAmount = 12;
                break;
            case 105: asanaAmount = 14;
                break;
            case 120: asanaAmount = 16;
                break;
        }
        return asanaAmount;
    }

    /**
     * 
     * @returns the ratio of Asana inside a sequence, according to chosen Theme
     */
    calcRatio(): number {
        let amount = this.calcAsanaAmount();
        return Math.floor(amount * 0.4);
    }
  
    /**
     * tries to sort Asana into a correct and logical order inside the sequence-flow (eg sitting-standing-lying...)
     * @todo: alle Asana durchgehen und schauen, welche nur einer order zugeordnet bin und richtig einsortieren mit for-Schleife
     * @todo: for-schleife: wenn mehr als eine order, entscheiden wo sie rein soll
     * @todo oder: 2 temporäre Arrays erstellen 1Array mit nur 1 order und anderer Asana mit 2 order (und dann mit forEach)
     * @todo ==> refine order of sequence
     * @param asanaArray 
     * @returns a sequence in the most possible logical order
     */
    sequenceOrder(asanaArray: IAsana[]): IAsana[] {  //nach Sortieralgorithmen suchen
        let orderedAsana: IAsana[];
        let orderOne = [];
        let orderTwo = [];
        let orderThree = [];
        //Problem: ASana mit order.length == 3
        asanaArray.forEach((asana, index) => {
            if (asana.order.length > 1) {
                for (let i = 0; i < asana.order.length; i++) {
                    if (asana.order[i] == 1 && orderOne.length < 3) {
                        orderOne.push(asana);
                        break;
                    }
                    else if (asana.order[i] == 3 && orderThree.length < 3) {
                        orderThree.push(asana);
                        break;
                    }
                    else {
                        orderTwo.push(asana);
                        break;
                    }
                }
            }
            else {
                switch (asana.order[0]) {
                    case 1:
                        orderOne.push(asana);
                        break;
                    case 2:
                        orderTwo.push(asana);
                        break;
                    case 3:
                        orderThree.push(asana);
                        break;
                }
            }
        });
        return orderedAsana = [...orderOne, ...orderTwo, ...orderThree];
    }

    /**
     * calls calcRatio() to filter suitable Asana by theme
     * fills up sequence with other random asana if not enough asanas by theme
     * @returns a list of Asanas filtered by theme of sequence
     */
    selectAsanaByTheme(): IAsana[] {
        let ratio = this.calcRatio();
        let themeAsanas: IAsana[] = [];
        this.filteredAsanas.forEach((asana) => {
            if (asana.theme.includes(this.userData.theme) && themeAsanas.length < ratio) {
                themeAsanas.push(asana);
            }
        });
        this.stillMissing = ratio - themeAsanas.length;
        let alreadyUsed = [];
        while (this.stillMissing > 0) {
            let randomIndex = Math.floor(Math.random() * this.asanas.length);
            let randomAsana = this.asanas[randomIndex];
            if (randomAsana.theme.includes(this.userData.theme) && !alreadyUsed.includes(randomIndex)) {
                alreadyUsed.push(randomIndex)
                themeAsanas.push(randomAsana);
                this.stillMissing--;
            }
        }
        return themeAsanas;
    }


    fillUpSequence(themeAsana: IAsana[]) {
        let themedArr = themeAsana.slice();
        let filteredAsanas = this.filteredAsanas.slice();
        let fullAmount = this.calcAsanaAmount();
        this.stillMissing2 = fullAmount - themedArr.length;
        let alreadyUsed = [];
        let round = 0;
        while (this.stillMissing2 > 0 && round < this.asanas.length) {
            // creates Endosschleife wenn nicht genügend Asana gefunden werden und stillMissing2 nie 0 wird
            let randomIndex = Math.floor(Math.random() * (filteredAsanas.length - 1));
            let randomAsana = filteredAsanas[randomIndex];
            if (!alreadyUsed.includes(randomIndex) && !themedArr.includes(randomAsana)) {
                alreadyUsed.push(randomAsana);
                themedArr.push(randomAsana);
                this.stillMissing2--;
            }
            round++;
        }
        (this.stillMissing2 > 0) ? console.log("maximum erreicht") : console.log("Sequenz vollständig!");
        // was tun wenn keine passenden asana mehr da sind? Asana wiederholen? 
        // z.B. nochmal while-Schelife aber statt filteredAsana this.asana
        return themedArr;
    }
}

export default SequenceCreatorModel;
