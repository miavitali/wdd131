const chapterAddBtn = document.querySelector('button');

chapterAddBtn.addEventListener('click', function() {
    const inputElm= document.querySelector('#favchap');
    
    if (inputElm.value.trim() === "") {
        inputElm.focus();
        alert('please write something')
        return
    }
    
    const chapterList = document.querySelector('#list');
    const listItem = document.createElement('li')
    const deleteItemBtn = document.createElement('button')
    
    listItem.textContent = inputElm.value;
    deleteItemBtn.textContent = '❌';
    listItem.append(deleteItemBtn);
    chapterList.append(listItem)
    inputElm.value = '';
    inputElm.focus();

    deleteItemBtn.addEventListener('click', function() {
        chapterList.removeChild(listItem);
        inputElm.focus();
    });
});