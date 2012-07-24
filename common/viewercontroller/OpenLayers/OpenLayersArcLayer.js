/* 
 * Copyright (C) 2012 Expression organization is undefined on line 4, column 61 in Templates/Licenses/license-gpl30.txt.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * @class 
 * @constructor
 * @description OpenLayers Arc layer super class
 * @author <a href="mailto:meinetoonen@b3partners.nl">Meine Toonen</a>
 **/
Ext.define("viewer.viewercontroller.openlayers.OpenLayersArcLayer",{
    extend: "viewer.viewercontroller.controller.ArcLayer",
    mixins: {
        openLayersLayer: "viewer.viewercontroller.openlayers.OpenLayersLayer"
    },
    constructor: function(config){
        viewer.viewercontroller.openlayers.OpenLayersArcLayer.superclass.constructor.call(this, config);    
        this.initConfig(config);
        return this;
    },

    /**
     *Get the id of this layer
     */
    getId :function (){
        return this.id;
    },

    reload : function (){
        //this.map.getFrameworkMap().callMethod(this.mapComponent.getMap().getId() + "_" + this.getId(),"setConfig",this.toXML() );
    },

    getName : function (){
        return this.options["name"];
    },

    getServer :function (){
        return this.options["server"];
    },

    getService : function (){
        return this.options["service"];
    },

    getServlet : function (){
        return this.options["servlet"];
    },

    getMapservice : function (){
        return this.options["mapservice"];
    },
    getLayers : function(){
        return this.options["layers"];
    }, 
    /**
     * @see viewer.viewercontroller.openlayers.OpenLayersLayer#setVisible
     */
    setVisible: function(vis){
        this.mixins.openLayersLayer.setVisible.call(this,vis);
    },
    getLegendGraphic: function (){
        //console.log("getLegendGraphic still needs to be implemented in ArcLayer");
        return null;
    },
    setBuffer : function (radius,layer){
        console.log("OpenLayersArcLayer.setBuffer: .setBuffer() must be made!");
    },
    removeBuffer: function(layer){        
        console.log("OpenLayersArcLayer.removeBuffer: .removeBuffer() must be made!");
    },
    getLastMapRequest : function () {
        return this.mixins.openLayersLayer.getLastMapRequest.call(this);
    },
    getType : function (){
        return this.mixins.openLayersLayer.getType.call(this);
    },
    /**
     * @see viewer.viewercontroller.OpenLayers.OpenLayersLayer#setAlpha
     */
    setAlpha: function (alpha){
        this.mixins.openLayersLayer.setAlpha.call(this,alpha);
    }
});

