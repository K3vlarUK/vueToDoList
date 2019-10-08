import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({

    el: "#app",
    data:{
      tasks: [
        {name: "Dishes", priority: "high"},
        {name: "Brush Hallway", priority: "low"},
        {name: "Feed Cats", priority: "high"}
      ],
      newTask: "",
      newPriority: ""
    },
    methods:{
      saveNewTask: function() {
        this.tasks.push({
          name: this.newTask,
          priority: this.newPriority
        });
        this.newTask = "";
        this.newPriority = "";
      }
    }
  });
});
