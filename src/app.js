import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({

    el: "#app",
    data:{
      tasks: [
        {name: "Dishes", priority: "High"},
        {name: "Brush Hallway", priority: "Low"},
        {name: "Feed Cats", priority: "High"}
      ],
      newTask: "",
      priority: ""
    },
    methods:{
      saveNewTask: function() {
        this.tasks.push({
          name: this.newTask,
          priority: this.priority
        });
        this.newTask = "";
        this.priority = "";
      }
    }
  });
});
