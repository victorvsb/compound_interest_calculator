function montante(capital, taxa, periodo, aporte) {

    let inicial = capital * Math.pow((taxa / 100) + 1, periodo);
    let mensal = (aporte * (Math.pow((taxa / 100) + 1, periodo) - 1)) / (taxa / 100)

    return Math.round((inicial + mensal) * 100) / 100;
}

export default montante;