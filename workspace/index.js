var app = new Vue({
    el: '#app',

    data: {
        title: "#MaConf2020",
        feesConfig: [
            { price: 150, text: 'Étudiant', value: 'Student' },
            { price: 200, text: 'Académique', value: 'Academic' },
            { price: 300, text: 'Entreprise', value: 'Industrial' },
        ],
        lodgingConfig: [
            { price: 150, text: 'Avec réservation', value: 'with', lodgingAvailable: true },
            { price: 0, text: 'Sans réservation', value: 'without', lodgingAvailable: true }
        ],
        errors: [],
        email: 'baron@ensma.fr',
        firstName: 'Mickael',
        familyName: 'BARON',
        sexe: 'male',
        institution: 'ISAE-ENSMA',
        address: 'Téléport 2 - 1 avenue Clément Ader, BP 40109',
        zipCode: '86961',
        city: 'Futuroscope Chasseneuil',
        country: 'France',
        webpage: 'https://mickael-baron.fr',
        institutionwebpage: 'https://www.lias-lab.fr/members/mickaelbaron',
        fees: null,
        lodging: null,
    },
    methods: {
        checkForm(e) {
            this.errors = [];

            if (!this.email) {
                this.errors.push('Email obligatoire.');
            } else if (!this.validEmail(this.email)) {
                this.errors.push('Email non valide.');
            }

            if (!this.firstName) {
                this.errors.push('Prénom obligatoire.');
            }

            if (!this.sexe) {
                this.errors.push('Sexe manquant.');
            }

            if (!this.familyName) {
                this.errors.push('Nom de famille obligatoire.');
            }

            if (!this.institution) {
                this.errors.push('Nom de l\'institution obligatoire.');
            }

            if (!this.address) {
                this.errors.push('Adresse obligatoire.');
            }

            if (!this.zipCode) {
                this.errors.push('Code postale obligatoire.');
            }

            if (!this.city) {
                this.errors.push('Ville obligatoire.');
            }

            if (!this.country) {
                this.errors.push('Pays obligatoire.');
            }

            if (!this.fees) {
                this.errors.push('Formule d\'inscription obligatoire.');
            }

            if (!this.lodging) {
                this.errors.push('Moyen d\'hébergement obligatoire.');
            }

            if (!this.errors.length) {
                this.validated = true;
            } else {
                this.validated = false;
            }

            e.preventDefault();
        },
        validEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }
});