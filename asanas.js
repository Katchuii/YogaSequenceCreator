var asanas = [
    {
        id: 1,
        name: 'Paschimottanasana',
        titel: 'sitzende Vorwärsteuge',
        isVariation: false,
        level: 1,
        type: [
            1
        ],
        theme: [
            4,
            6,
            9,
            10
        ],
        locus: 1,
        order: [
            2
        ],
        balance: false,
        counter: [''],
        variation: {
            ancestor: 'Paschimottanasa',
            name: 'Fokus auf Loslassen oder geraden Rücken, Füße an verschiedenen Stellen halten'
        }
    },
    {
        id: 2,
        name: 'Bhujangasana',
        titel: 'Kobra',
        isVariation: false,
        level: 1,
        type: [
            2
        ],
        theme: [
            1,
            7,
            10
        ],
        locus: 3,
        order: [
            2
        ],
        balance: false
    },
    {
        id: 3,
        name: 'Vrikshasana',
        titel: 'Baum',
        isVariation: false,
        level: 1,
        type: [
            3,
            6
        ],
        theme: [
            3,
            4,
            6,
            8
        ],
        locus: 2,
        order: [
            2
        ],
        balance: 'legbalance'
    },
    {
        id: 4,
        name: 'Sirshasana',
        titel: 'Kopfstand',
        isVariation: false,
        level: 2,
        type: [
            3,
            5
        ],
        theme: [
            1,
            3,
            4,
            5,
            6
        ],
        locus: 1,
        order: [
            2
        ],
        balance: 'generalbalance',
        variation: {
            ancestor: 'bldwbfljw',
            name: 'jkhjk'
        }
    },
    {
        id: 5,
        name: 'Trikonasana',
        titel: 'Dreieck',
        isVariation: false,
        level: 1,
        type: [
            4,
            6,
            3
        ],
        theme: [
            3,
            5,
            6,
            7,
            8,
            10
        ],
        locus: 2,
        order: [
            2
        ],
        balance: 'generalbalance'
    },
    {
        id: 6,
        name: 'Adho-Mukha-Shvavasana',
        titel: 'Herabschauender Hund',
        isVariation: false,
        level: 1,
        type: [
            1,
            5
        ],
        theme: [
            4,
            5,
            10
        ],
        locus: 2,
        order: [
            1, 2
        ],
        balance: false,
        counter: ['Balasana', 'Apanasana', 'Viparita Karani'],
        prepare: ['Bakasana', 'Adho Mukha Vrksasana', 'Viparita Karani', 'Salamba Sirshasana', 'Uttanasana']
    },
    {
        id: 7,
        name: 'Urdva-Mukha-Shvavasana',
        titel: 'Heraufschauender Hund',
        isVariation: false,
        level: 1,
        type: [
            2
        ],
        theme: [
            2,
            5,
            7,
            10
        ],
        locus: 1,
        order: [
            1, 2
        ],
        balance: false
    },
    {
        id: 8,
        name: 'Urdhva-Dhanurasana',
        titel: 'Rad',
        isVariation: false,
        level: 2,
        type: [
            2,
            5,
            6
        ],
        theme: [
            1,
            2,
            5,
            6,
            7,
            10
        ],
        locus: 2,
        order: [
            2
        ],
        balance: false
    },
    {
        id: 9,
        name: 'Virasana',
        titel: 'Heldensitz',
        isVariation: false,
        level: 1,
        type: [
            0
        ],
        theme: [
            4,
            6,
            9
        ],
        locus: 1,
        order: [
            1, 2
        ],
        balance: false
    },
    {
        id: 10,
        name: 'Utthita-Parsvakonasana',
        titel: 'gestreckte seitliche Winkelhaltung',
        isVariation: false,
        level: 1,
        type: [
            3,
            4,
            6,
            8
        ],
        theme: [
            1,
            2,
            3,
            5,
            6,
            8
        ],
        locus: 2,
        order: [
            2
        ],
        balance: 'generalbalance'
    },
    {
        id: 11,
        name: 'Anjaneyasana',
        titel: 'tiefer Ausfallschritt',
        isVariation: false,
        level: 1,
        type: [
            2,
            3,
            6
        ],
        theme: [
            1,
            2,
            3,
            5,
            6,
            7,
            8,
            10
        ],
        locus: 2,
        order: [
            2
        ],
        balance: 'generalbalance',
        counter: ['Adho Mukha Svanasana', 'Balasana', 'Uttanasana'],
        prepare: ['backwardbends', 'Ashta Chandrasana', 'Hanumanasana', 'Supta Virasana']
    },
    {
        id: 12,
        name: 'Navasana',
        titel: 'Boot',
        isVariation: false,
        level: 2,
        type: [
            7
        ],
        theme: [
            1,
            2,
            3,
            5
        ],
        locus: 1,
        order: [
            2
        ],
        balance: 'generalbalance'
    },
    {
        id: 13,
        name: 'Ardha-Chandrasana',
        titel: 'Halbmond',
        isVariation: false,
        level: 2,
        type: [
            3,
            6,
            7
        ],
        theme: [
            2,
            3,
            6,
            8
        ],
        locus: 2,
        order: [
            2
        ],
        balance: 'legbalance',
        counter: ['Malasana', 'Balasana', 'Prasarita Padotthanasana A'],
        prepare: [''],
        variation: {
            ancestor: 'Ardha-Chandrasana',
            name: 'bend leg, grab foot and bring it towards hip'
        }
    },
    {
        id: 14,
        name: 'Kakasana',
        titel: 'Krähe',
        isVariation: false,
        level: 2,
        type: [
            3,
            7
        ],
        theme: [
            1,
            3,
        ],
        locus: 1,
        order: [
            2
        ],
        balance: 'armbalance'
    },
    {
        id: 15,
        name: 'Balasana',
        titel: 'Kindstellung',
        isVariation: false,
        level: 1,
        type: [
            1
        ],
        theme: [
            4
        ],
        locus: 2,
        order: [
            1,
            2,
            3
        ],
        balance: false
    },
    {
        id: 16,
        name: 'Marjari-Asana',
        titel: 'Katze-Hund',
        isVariation: false,
        level: 1,
        type: [
            1,
            2
        ],
        theme: [
            4,
            7,
            10
        ],
        locus: 1,
        order: [
            1
        ],
        balance: false
    },
    {
        id: 17,
        name: 'Dhanurasana',
        titel: 'Bogen',
        isVariation: false,
        level: 2,
        type: [
            2,
            6
        ],
        theme: [
            1,
            5,
            7,
            10
        ],
        locus: 1,
        order: [
            2
        ],
        balance: false,
        prepare: ['Parsva Dhanurasana', 'Bhekasana', 'Kapotanasana', 'Ustrasana'],
        counter: ['Balasana', 'Apanasana', 'Ardha Matsyendrasana', 'Supta Parivartanasana']
    },
    {
        id: 18,
        name: 'Virabhadrasana-I',
        titel: 'Krieger I',
        isVariation: false,
        level: 1,
        type: [
            2,
            6
        ],
        theme: [
            2,
            5,
            6,
            7,
            8
        ],
        locus: 2,
        order: [
            2
        ],
        balance: false
    },
    {
        id: 19,
        name: 'Virabhadrasana-II',
        titel: 'Krieger II',
        isVariation: false,
        level: 1,
        type: [
            4,
            6
        ],
        theme: [
            2,
            5,
            6,
            7,
            8
        ],
        locus: 2,
        order: [
            2
        ],
        balance: false
    },
    {
        id: 20,
        name: 'Shavasana',
        titel: 'Totenstellung',
        isVariation: false,
        level: 1,
        type: [
            0
        ],
        theme: [
            4,
            9
        ],
        locus: 3,
        order: [
            3
        ],
        balance: false
    },
    {
        id: 21,
        name: 'Agnistambhasana',
        titel: 'doppelte Taube',
        isVariation: false,
        level: 2,
        type: [
            6
        ],
        theme: [
            4, 8, 9
        ],
        locus: 1,
        order: [
            1, 2
        ],
        balance: false,
        counter: ['simple twist', 'long forward bend'],
        prepare: ['Natarajasana', 'Eka Pasa Raja Kapotasana']
    },
    {
        id: 22,
        name: 'Akarna Dhanurasana',
        titel: 'Pfeil und Bogen',
        isVariation: false,
        level: 3,
        type: [
            1, 3, 6
        ],
        theme: [
            1, 3, 6, 8
        ],
        locus: 1,
        order: [
            2
        ],
        balance: 'general balance',
        counter: ['Apanasana', 'Adho Mukha Svanasana'],
        prepare: ['Ashtavakrasana', 'Eka Pasa Sirasana', 'Malasana']
    },
    {
        id: 23,
        name: 'Anahatasana',
        titel: 'knieender Hund',
        isVariation: false,
        level: 2,
        type: [
            2
        ],
        theme: [
            3, 7, 9
        ],
        locus: 1,
        order: [
            1, 3
        ],
        balance: false,
        counter: ['Apanasana', 'Balasana'],
        prepare: ['opens shoulders and outer rotator', 'Adho Mukha Svanasana', 'Urdhva Dhanurasana', 'Gomukhasana']
    },
    {
        id: 24,
        name: 'Ardha Baddha Padmottanasana',
        titel: 'halbe, gebundene Lotusstreckung',
        isVariation: false,
        level: 3,
        type: [
            1, 3, 6
        ],
        theme: [
            3, 8
        ],
        locus: 2,
        order: [
            2, 3
        ],
        balance: 'leg balance',
        counter: ['Tadasana', 'Mukha Svanasanas'],
        prepare: [],
        variations: {
            ancestor: 'Ardha Baddha Padmottanasana',
            name: 'grab foot with same hand and hold elbow from behind'
        }
    },
    {
        id: 25,
        name: 'Ardha Matsyendrasana',
        titel: 'Drehsitz',
        isVariation: false,
        level: 2,
        type: [
            4,
            6,
        ],
        theme: [
            6, 8, 10
        ],
        locus: 1,
        order: [
            2, 3
        ],
        balance: false,
        counter: ['Apanasana', 'Ananda Balasana', 'Dandasana', 'Paschimottansana', 'Janu Sirsanasa'],
        prepare: ['warm up for intense twists', ' Parsva Bakasana', 'Eka Pada Koundinyasana'],
        variation: {
            ancestor: 'Ardha Matsyendrasana',
            name: 'straighten one leg, place other foot on outside of other legs knee'
        }
    },
    {
        id: 26,
        name: 'Ardha Utthanasa',
        titel: 'Halbe Vorbeuge im Stand',
        isVariation: false,
        level: 2,
        type: [
            4,
            6,
        ],
        theme: [
            6, 8, 10
        ],
        locus: 1,
        order: [
            2, 3
        ],
        balance: false,
        counter: ['Apanasana', 'Ananda Balasana', 'Dandasana', 'Paschimottansana', 'Janu Sirsanasa'],
        prepare: ['warm up for intense twists', ' Parsva Bakasana', 'Eka Pada Koundinyasana'],
        variation: {
            ancestor: 'Ardha Matsyendrasana',
            name: 'straighten one leg, place other foot on outside of other legs knee'
        }
    },
    {
        id: 27,
        name: 'Ashta Chandrasana',
        titel: 'Hoher Ausfallschritt',
        isVariation: false,
        level: 1,
        type: [
            2, 3, 6
        ],
        theme: [
            1, 2, 3, 5, 10
        ],
        locus: 2,
        order: [
            1, 2
        ],
        balance: 'general balance',
        counter: ['Balasana', 'Vinyasa', 'Adho Mukha Svanasana'],
        prepare: ['Virabhadrasana I + III', ' Parivrtta Parsvakonasana', 'Parsvakonasana'],
        variation: {
            ancestor: 'Ardha Matsyendrasana',
            name: 'straighten one leg, place other foot on outside of other legs knee'
        }
    },
    {
        id: 28,
        name: 'Baddha Konasana',
        titel: 'Geschlossene Winkelhaltung',
        isVariation: false,
        level: 2,
        type: [
            1,
            6,
        ],
        theme: [
            4, 8, 9
        ],
        locus: 1,
        order: [
            3
        ],
        balance: false,
        counter: ['Apanasana', 'Balasana', 'Adho Mukha Svanasana', 'Gomukhasana',],
        prepare: ['Supta Baddha Konasana', ' Janua Sirsasana', 'Swastikasana'],
    },
    {
        id: 29,
        name: 'Bhekasana',
        titel: 'Frosch',
        isVariation: false,
        level: 2,
        type: [
            0
        ],
        theme: [
            4, 8
        ],
        locus: 3,
        order: [
            3
        ],
        balance: false,
        counter: ['Balasana', 'Dandasana', 'Adho Mukha Svanasana', 'Ardha Matsyendrasana', 'Paschimottanasana'],
        prepare: ['Supta Virasana', ' Natarajasana', 'Urdhva Dhanurasana'],
        variation: {
            ancestor: 'Bhekasana',
            name: 'only on one side'
        }
    },
    {
        id: 30,
        name: 'Dandasana',
        titel: 'Stock',
        isVariation: false,
        level: 1,
        type: [
            0, 7
        ],
        theme: [
            6, 10
        ],
        locus: 3,
        order: [
            1, 3
        ],
        balance: false,
        counter: ['Apanasana', 'Baddha Konasana', 'Supta Baddha Konasana', 'Viparita Karani'],
        prepare: ['Vorbeugen im Sitzen', ' Hüftöffner und Drehungen', 'Purvottanasana'],
    },
    {
        id: 31,
        name: 'Bhekasana',
        titel: 'Frosch',
        isVariation: false,
        level: 2,
        type: [
            0
        ],
        theme: [
            4, 8
        ],
        locus: 3,
        order: [
            3
        ],
        balance: false,
        counter: ['Balasana', 'Dandasana', 'Adho Mukha Svanasana', 'Ardha Matsyendrasana', 'Paschimottanasana'],
        prepare: ['Supta Virasana', ' Natarajasana', 'Urdhva Dhanurasana'],
        variation: {
            ancestor: 'Bhekasana',
            name: 'only on one side'
        }
    },
    {
        id: 32,
        name: 'Dvicakravahasana',
        titel: 'Radfahren im Liegen',
        isVariation: false,
        level: 1,
        type: [
            7
        ],
        theme: [
            1, 5, 10
        ],
        locus: 3,
        order: [
            1
        ],
        balance: false,
        counter: ['Balasana', 'Dandasana', 'Adho Mukha Svanasana', 'Ardha Matsyendrasana', 'Paschimottanasana'],
        prepare: ['weitere BauchmuskelÜbungen', ' Navasana', 'Tolasana', 'Lolasana'],
    },
    {
        id: 33,
        name: 'Astavakrasana',
        titel: 'Haltung des Weisen Astavakra',
        isVariation: false,
        level: 3,
        type: [
            3
        ],
        theme: [
            1, 3
        ],
        locus: 1,
        order: [
            2
        ],
        balance: 'armbalance',
        counter: ['Balasana', 'Supta Baddha Konasana', 'Adho/ Urdhva Mukha Svanasana', 'Handgelenktherapie'],
        prepare: ['Eka Pada Koundinyasana A/B', ' Dwi Pada Koundinyasana'],
    },
    {
        id: 34,
        name: 'Eka Pada Koundinyasana A',
        titel: 'Einbeinige Haltung des Weise Koundinya A',
        isVariation: true,
        level: 3,
        type: [
            3
        ],
        theme: [
            1, 3
        ],
        locus: 1,
        order: [
            2
        ],
        balance: 'armbalance',
        counter: ['Balasana', 'Supta Baddha Konasana', 'Adho/ Urdhva Mukha Svanasana', 'Handgelenktherapie'],
        prepare: ['Galavasana', ' Dwi Pada Koundinyasana'],
    },
    {
        id: 35,
        name: 'Eka Pada Koundinyasana B',
        titel: 'Einbeinige Haltung des Weise Koundinya B',
        isVariation: true,
        level: 3,
        type: [
            3
        ],
        theme: [
            1, 3
        ],
        locus: 1,
        order: [
            2
        ],
        balance: 'armbalance',
        counter: ['Balasana', 'Supta Baddha Konasana', 'Adho/ Urdhva Mukha Svanasana', 'Handgelenktherapie'],
        prepare: ['Galavasana', ' Dwi Pada Koundinyasana'],
    },
    {
        id: 36,
        name: 'Eka Pada Raja Kapotanasana',
        titel: 'Einbeinige Königstaube',
        isVariation: false,
        level: 2,
        type: [
            2, 6
        ],
        theme: [
            3, 6, 7, 8, 10
        ],
        locus: 1,
        order: [
            2, 3
        ],
        balance: 'general balance',
        counter: ['Balasana', 'Twists'],
        prepare: ['Natarajasana', 'Hanumanasana', 'Kapotasana'],
        variation: {
            ancestor: 'Eka Pada Raja Kapotasana',
            name: 'Fuß in Armebeuge und Arme hinter dem Kopf verschränken'
        }
    },
    {
        id: 37,
        name: 'Garudasana',
        titel: 'Adler',
        isVariation: false,
        level: 1,
        type: [
            3, 6
        ],
        theme: [
            3, 6, 8
        ],
        locus: 2,
        order: [
            1, 2, 3
        ],
        balance: ' legbalance',
        counter: ['Tadasana', 'Uttanasana', 'Baddha Konasana', 'Adho Mukha Svanasana'],
        prepare: ['Gomukhasana', 'Bharadvajasana', 'Virasana'],
    },
    {
        id: 38,
        name: 'Gomukhasana',
        titel: 'KuhKopf',
        isVariation: false,
        level: 2,
        type: [
            1, 6
        ],
        theme: [
            4, 6, 8, 9
        ],
        locus: 1,
        order: [
            2, 3
        ],
        balance: false,
        counter: ['Dandasana', 'Baddha Konasana', 'Upavista Konansana'],
        prepare: ['Natarajasana', 'Hanumanasana', 'Kapotasana'],
    },
    {
        id: 39,
        name: 'Halasana',
        titel: 'Pflug',
        isVariation: false,
        level: 1,
        type: [
            1, 5
        ],
        theme: [
            4, 6, 10
        ],
        locus: 3,
        order: [
            2, 3
        ],
        balance: false,
        counter: ['Uttana Padasana', 'Twists', 'Viparita Karani', 'Matsyasana', 'Brücke'],
        prepare: ['Karnapidasana', 'Salamba Sarvangasana'],
        variation: {
            ancestor: 'Halasana',
            name: '1. Beine einzeln absenken, 2. Beine anwinkeln und neben den Ohren ablegen'
        }
    },
    {
        id: 40,
        name: 'Janu Sirsasana',
        titel: 'Kopf-zu-Kniw-Haltung',
        isVariation: false,
        level: 1,
        type: [
            1, 6
        ],
        theme: [
            4, 8, , 910
        ],
        locus: 1,
        order: [
            2, 3
        ],
        balance: false,
        counter: ['Apanasana', 'Setu Bandha Sarvangasana', 'Gomukhasana'],
        prepare: ['Parivrtta Janu Sirsasana', 'Upavista Konasana'],
    },
    {
        id: 41,
        name: 'Kapotasana',
        titel: 'Taube',
        isVariation: false,
        level: 3,
        type: [
            2
        ],
        theme: [
            7
        ],
        locus: 3,
        order: [
            2, 3
        ],
        balance: false,
        counter: ['Bauchentspannungslage', 'simple Twists', 'Balasana'],
        prepare: ['Eka Pada Raja Kapotasana', 'Natarajasana'],
        variation: {
            ancestor: 'Kapotasana',
            name: 'from Ustrasana, stretch arms back, place hands next to ears and push up, place crown on floor, slowly walk hands toward feet pr try to straighten arms, walk towards feet, place hands on feet and place head down again'
        }
    },
    {
        id: 42,
        name: 'Krounchasana',
        titel: 'Reiher',
        isVariation: false,
        level: 2,
        type: [
            1, 3
        ],
        theme: [
            1, 3, 6
        ],
        locus: 1,
        order: [
            1, 2
        ],
        balance: 'general balance',
        counter: ['Vinyasa', 'Balasana'],
        prepare: ['Urdhva Mukha Pachimottansana'],
    },
    {
        id: 43,
        name: 'Kukkutasana',
        titel: 'Hahn',
        isVariation: false,
        level: 3,
        type: [
            3, 7
        ],
        theme: [
            1, 3, 5
        ],
        locus: 1,
        order: [
            2, 3
        ],
        balance: 'armbalance',
        counter: ['Dandasana', 'Gomukhasana', 'Balasana', 'Paschimottanasana'],
        prepare: ['Eka Pada Raja Kapotasana', 'Natarajasana'],
        variation: {
            ancestor: 'Kukkutasana',
            name: 'prepare with Bakasana & Padmasana'
        }
    },
    {
        id: 44,
        name: 'Kurmasana',
        titel: 'Schildkröte ',
        isVariation: false,
        level: 2,
        type: [
            1
        ],
        theme: [
            4, 8, 9
        ],
        locus: 1,
        order: [
            2, 3
        ],
        balance: false,
        counter: ['Apanasana', 'simple Twists', 'Balasana', 'Setu Bandha Sarvangasana'],
        prepare: ['Supta Kurmasana', 'Tittibhasana'],
        variation: {
            ancestor: 'Kapotasana',
            name: 'from Ustrasana, stretch arms back, place hands next to ears and push up, place crown on floor, slowly walk hands toward feet pr try to straighten arms, walk towards feet, place hands on feet and place head down again'
        }
    },
];
export default asanas;
//# sourceMappingURL=asanas.js.map