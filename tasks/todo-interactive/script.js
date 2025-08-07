document.querySelectorAll('.itemlist').forEach(function(itemlist) {
    itemlist.addEventListener('click', function() {
        itemlist.classList.toggle('checked');
        itemlist.style.color = itemlist.classList.contains('checked') ? 'black' : 'gray';
    });
});
