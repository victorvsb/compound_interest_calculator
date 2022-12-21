<template>
  <Calculadora />
</template>

<script>
import Calculadora from './components/Calculadora.vue'

export default {
  name: 'App',
  components: {
    Calculadora
  }
}
</script>

<style>
#app_form {
    background-color: beige;
    width: 15%;
    float: left;
    height: 300px;
    border-radius: 15px;
    border-style: solid;
    padding: 5px;
    margin: 5px;
}

.result {
    background-color: beige;
    width: auto;
    float: left;
    height: 300px;
    border-radius: 15px;
    border-style: solid;
    padding: 5px;
    margin: 5px;
}

.fields_container {
    padding: 5px;
}

.buttons_container {
    padding: 5px;
    vertical-align: center;
}

.field {
    padding: 10px;
}

.field>label {
    font-weight: bold;
}

.field>input {
    display: block;
}

.buttons_container>input {
    background-color: rgb(163, 163, 99);
    border: none;
    color: black;
    padding: 5px 10px;
    margin: 5px;
    text-align: center;
    display: inline-block;
    font-size: 16px;
}

.result>ul {
    list-style: none;
    margin: 5px;
    padding: 5px;
}

.result>ul>li {
    padding: 10px;
}

.result>ul>li>em {
    font-weight: bold;
    font-style: normal;
}
</style>
