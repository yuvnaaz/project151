AFRAME.registerComponent("car",{
    schema:{
        model:{type: "string", default: "./pixel_car/scene.gltf"}
    },

    init: function(){
        this.el.setAttribute("gltf-model", this.data.model)
        var pos = {x:0, y:0, z:0}
        var rotation = {x:0, y:0, z:0}
        this.el.setAttribute("position", pos)
        this.el.setAttribute("rotation", rotation)
    }

})