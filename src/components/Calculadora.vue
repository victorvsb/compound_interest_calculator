<template>
    <div>

        <form id="app_form">

        <div class="fields_container">

            <div class="field">

                <label for="input_capital"> Capital </label>
                <input type=" text" v-model="in_capital" id="input_capital">

            </div>

            <div class="field">

                <label for="input_taxa"> Taxa de juros </label>
                <input type="text" v-model="in_taxa" id="input_taxa">

            </div>

            <div class="field">

                <label for="input_periodo"> Período </label>
                <input type="text" v-model="in_periodo" id="input_periodo">

            </div>

            <div class="field">

                <label for="input_aporte"> Aporte mensal </label>
                <input type="text" v-model="in_aporte" id="input_aporte">

            </div>

        </div>
        
        <div class="buttons_container">

            <input type="button" value="Enviar" v-on:click="submitForm">

        </div>
        
        </form>

        <div class="result">
        <ul>
            <li> <em> Capital inicial: </em> R$ {{ in_capital }} </li>
            <li> <em> Aporte periódico: </em> R$ {{ in_aporte }} </li>
            <li> <em> Taxa: </em> {{ in_taxa }}% </li>
            <li> <em> Período: </em> {{ in_periodo }} meses </li>
        </ul>
        <hr>
        <ul>
            <li> <em> Montante: </em> R$ {{ out_montante }} </li>
            <li> <em> Total investido: </em> R$ {{ out_total_investido }} </li>
            <li> <em> Lucro: </em> R$ {{ out_lucro }} ({{ out_lucro_per_cent }} %)</li>
        </ul>
        </div>

    </div>
</template>


<script>
    import montante from '../functions.js';
    export default {
        name: 'Calculadora',
        data() {
            return {

                out_montante: 0,
                out_total_investido: 0,
                out_porcent_lucro: 0,
                out_lucro: 0,
                out_lucro_per_cent: 0,

                in_capital: 1000,
                in_taxa: 1.00,
                in_periodo: 12,
                in_aporte: 10

            }
        },
        methods: {
            submitForm() {
                let capital = parseFloat(this.in_capital)
                let taxa = parseFloat(this.in_taxa)
                let periodo = parseInt(this.in_periodo)
                let aporte = parseFloat(this.in_aporte)

                this.out_montante = montante(capital, taxa, periodo, aporte)
                this.out_total_investido = Math.round((capital + periodo * aporte) * 100) / 100
                this.out_lucro = Math.round((this.out_montante - this.out_total_investido) * 100) / 100
                this.out_lucro_per_cent = Math.round(this.out_lucro / this.out_total_investido * 10000) / 100
            }
        }

    }

    
</script>
