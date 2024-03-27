const downloadPDFButton = document.getElementById('downloadPDF');

downloadPDFButton.addEventListener('click', function() {
  const printableContent = document.querySelector('main');
  const originalContent = document.body.innerHTML; // Store original content

  // Create a temporary element to hold the content for printing
  const printContainer = document.createElement('div');
  printContainer.style.display = 'none'; // Hide from the user

  // Move the printable content to the temporary element
  printContainer.appendChild(printableContent.cloneNode(true));
  document.body.appendChild(printContainer);

  // Trigger the print dialog and wait for it to close
  window.print();

  // Restore the original content and remove the temporary element
  document.body.innerHTML = originalContent;
  printContainer.remove();
});
