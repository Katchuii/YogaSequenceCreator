// next step: sequenceOrder funktionert? überprüfen, bugs beheben
// next step: diese Seqnuez der View übergeben und Liste ausgeben (rendern), z.B. neuen div erstellen mit Asana Name und Bild (-> URL in asanas.js)
// Präsentation was die Funktionen machen

import SequenceCreatorModel from "./model.js";
import  SequenceCreatorView  from "./view.js";
import asanas from './asanas.js';

// sowas wie Main: hier werden Objekte initiiert und ihre Methoden aufgerufen
export class SequenceCreatorController {
  
  sequenceModel: SequenceCreatorModel;
  sequenceView: SequenceCreatorView;

  constructor(model: SequenceCreatorModel, view: SequenceCreatorView) {
    let requestDetails = {
      method: 'POST',
      body: JSON.stringify(asanas),
      headers: {
        'Content-type': 'application/json',
        // 'apikey': apiKey
      }
    }
    let url = "https://localhost:5001/api/Asanas";
    this.sequenceModel = model;
    this.sequenceView = view;
    //wenn in der View Daten submitted wernde, rufe sie hier ab:
    let _this = this;
    this.sequenceView.bindFormSubmit(function () {
     // _this.fetchApi(url, requestDetails);
      _this.createSequence();
    });

  }

  // liest Daten aus Nutzereingabe (form) aus View , schickt diese ans Model und löst zum Schluss die View-renderSeqeunce() aus mit der berechneten Sequenz, um diese darzustellen
  createSequence() {
    console.log("HI");
    let data = this.sequenceView.getUserChoice();
    let sequence = this.sequenceModel.setUserData(data);
    console.log("final sequence in controller ", sequence);
    this.sequenceView.renderSequence(sequence);
    console.log("triggered createSequence");
  }


  async fetchApi(endpoint : string, req? : Object) {
    try {
      const response = await fetch(endpoint, req);
      // if(!response.ok) {
      //   this.fetchApi(endpoint, this.requestDetails); 2. endpoint mit postRequest
      // } else
       if(response.ok) { 
         //in C# Success-Message zurückschicken lassen
        const data = await response.json();   
        return data;
      } throw new Error ('Request failed');
    } catch(error) {
      console.log(error);
    }
  }
}
  

document.addEventListener('DOMContentLoaded', () => {

  let app = new SequenceCreatorController(new SequenceCreatorModel(), new SequenceCreatorView());
});
