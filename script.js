function visibleCierre() {
    document.getElementById("btnAbrirMenu").classList.remove("d-block");
    document.getElementById("btnAbrirMenu").classList.add("d-none");

    document.getElementById("btnCerrarMenu").classList.remove("d-none");
    document.getElementById("btnCerrarMenu").classList.add("d-block");
}

function visibleApertura() {
    document.getElementById("btnCerrarMenu").classList.remove("d-block");
    document.getElementById("btnCerrarMenu").classList.add("d-none");

    document.getElementById("btnAbrirMenu").classList.remove("d-none");
    document.getElementById("btnAbrirMenu").classList.add("d-block");
}
