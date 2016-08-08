document.addEventListener("DOMContentLoaded", function() {

var header_li = document.querySelector('.piece_of_list')
var header_ul = header_li.querySelector('.vertical_list')


header_li.addEventListener('mouseover', function() {
    header_ul.classList.remove('hidden_list');
})
header_li.addEventListener('mouseout', function() {
    header_ul.classList.add('hidden_list');
})

var container_photo1 = document.querySelector('.photo_begin_container')
var container_photo2 = document.querySelector('.photo_end_container')
var container_opacity1 = document.querySelector('.position_opacity')
var container_opacity2 = document.querySelector('.building_opacity')

container_photo1.addEventListener('mouseover', function() {
    container_opacity1.classList.add('hidden_opacity');
})
container_photo1.addEventListener('mouseout', function() {
    container_opacity1.classList.remove('hidden_opacity');
})

container_photo2.addEventListener('mouseover', function() {
    container_opacity2.classList.add('hidden_opacity');
})
container_photo2.addEventListener('mouseout', function() {
    container_opacity2.classList.remove('hidden_opacity');
})

var select_div = document.querySelectorAll('.drop_down_list');
var select_list = document.querySelectorAll('.list_panel');
console.log(select_list);
var select_list_child = document.querySelectorAll('.list_panel li');
console.log(select_list_child);
var select_instead = document.querySelectorAll('.list_label');
var chair_title = document.querySelector('.title');
console.log(chair_title);
var chair_color = document.querySelector('.colorful');
console.log(chair_color);
var chair_pattern = document.querySelector('.pattern');
console.log(chair_pattern);
var choice_name = select_list[0];
console.log(choice_name);
var choice_color = select_list[1];
var choice_pattern = select_list[2];

for (var i = 0; i < select_div.length; i++) {
    select_div[i].addEventListener('click', function() {
        this.lastElementChild.classList.toggle('visible_panel')
        for (var j = 0; j < select_list_child.length; j++) {
            select_list_child[j].addEventListener('click', function() {
                this.parentElement.previousElementSibling.previousElementSibling.innerText = this.innerText;
                chair_title.innerText = this.innerText;
                /*if (choice_name) {
                    'Chair ' + this.innerText = chair_title.innerText;
                }

                if (choice_color) {
                        chair_color.innerText = this.innerText;
                }

                if (choice_pattern) {
                        chair_pattern.innerText = this.innerText;
                }*/
    })


}
})}


});
