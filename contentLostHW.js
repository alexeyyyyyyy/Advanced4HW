let group = {
    title: 'Java-56',
    students: ['Elena','Maria','Ekaterina','Olga'],

    showList: function () {

        const show = function(name) {
            console.log(`${this.title}: ${name}`);

        }

        this.students.forEach(show.bind(this));
    }

}

group.showList();
const newGroup = group;
group = null;
console.log('=======================================');
newGroup.showList();
console.log('===================New Task=====================')
