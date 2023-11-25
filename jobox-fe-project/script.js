function generateContract() {
    var clientName = document.getElementById('clientName').value;
    var startDate = document.getElementById('startDate').value;
    var endDate = document.getElementById('endDate').value;
    var serviceCost = document.getElementById('serviceCost').value;
    var serviceDescription = document.getElementById('serviceDescription').value;

    var contractTemplate = document.getElementById('contract-template');
    contractTemplate.innerHTML = contractTemplate.innerHTML
        .replace('[Client Name]', clientName)
        .replace('[Contract Start Date]', startDate)
        .replace('[Contract End Date]', endDate)
        .replace('[Service Cost]', serviceCost)
        .replace('[Service Description]', serviceDescription);

    document.getElementById('download-contract-btn').disabled = false;
}

function downloadContract() {
    var contractTemplate = document.getElementById('contract-template');
    html2pdf(contractTemplate);
}
