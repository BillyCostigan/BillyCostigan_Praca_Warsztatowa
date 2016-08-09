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
    var chair_title_value = document.querySelector('.title.value');
    var chair_color = document.querySelector('.colorful');
    var chair_color_value = document.querySelector('.color.value');
    var chair_pattern = document.querySelector('.pattern');
    var chair_pattern_value = document.querySelector('.pattern.value');
    var chair_transport = document.querySelector('.transport');
    var chair_transport_value = document.querySelector('.transport.value');

    var choice_name = select_list[0].children;
    var choice_color = select_list[1].children;
    var choice_pattern = select_list[2].children;

    var checkbox = document.querySelector('#transport');
    var visible_ok = document.querySelector('.checkbox input');

    var sum = document.querySelector('.sum');

    var sum_title = 0;
    var sum_color = 0;
    var sum_pattern = 0;
    var sum_transport = 0;

    for (var i = 0; i < select_div.length; i++) {


        select_div[i].addEventListener('click', function() {
            this.lastElementChild.classList.toggle('visible_panel')
            for (var j = 0; j < choice_name.length; j++) {
                choice_name[j].addEventListener('click', function() {
                    this.parentElement.previousElementSibling.previousElementSibling.innerText = this.innerText;
                    chair_title.innerText = 'Chair ' + this.innerText;
                    chair_title_value.innerText = this.dataset.price;
                    sum_title = chair_title_value.innerText;
                    for (var k = 0; k < choice_color.length; k++) {
                        choice_color[k].addEventListener('click', function() {
                            this.parentElement.previousElementSibling.previousElementSibling.innerText = this.innerText;
                            chair_color.innerText = this.innerText;
                            chair_color_value.innerText = this.dataset.price;
                            sum_color = chair_color_value.innerText;
                            for (var l = 0; l < choice_pattern.length; l++) {
                                choice_pattern[l].addEventListener('click', function() {
                                    this.parentElement.previousElementSibling.previousElementSibling.innerText = this.innerText;
                                    chair_pattern.innerText = this.innerText;
                                    chair_pattern_value.innerText = this.dataset.price;
                                    sum_pattern = chair_pattern_value.innerText;
                                    checkbox.addEventListener('click', function() {
                                        if (checkbox.checked == true) {
                                            chair_transport.innerText = this.nextElementSibling.innerText;
                                            chair_transport_value.innerText = this.dataset.price;
                                            sum_transport = chair_transport_value.innerText;
                                        } else {
                                            chair_transport.innerText = "";
                                            chair_transport_value.innerText = "";
                                        }
                                        sum.innerText = parseInt(sum_title) + parseInt(sum_color) + parseInt(sum_pattern) + parseInt(sum_transport);
                                    })

                                })
                            }
                        })
                    }
                })
            }

        })

    }

});
