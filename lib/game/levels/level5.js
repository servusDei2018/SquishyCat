ig.module( 'game.levels.level5' )
.requires( 'impact.image','game.entities.NonStickObject','game.entities.SpringFloor','game.entities.SquishKitten','game.entities.SlickFloor','game.entities.KillBox','game.entities.WinBox' )
.defines(function(){
LevelLevel5=/*JSON[*/{"entities":[{"type":"EntityNonStickObject","x":1728,"y":832},{"type":"EntityNonStickObject","x":1408,"y":1152},{"type":"EntitySpringFloor","x":324,"y":1216},{"type":"EntitySpringFloor","x":388,"y":1216},{"type":"EntitySpringFloor","x":452,"y":1216},{"type":"EntitySpringFloor","x":896,"y":1216},{"type":"EntitySpringFloor","x":960,"y":1216},{"type":"EntitySquishKitten","x":128,"y":1152},{"type":"EntityNonStickObject","x":256,"y":576},{"type":"EntityNonStickObject","x":256,"y":512},{"type":"EntityNonStickObject","x":256,"y":448},{"type":"EntityNonStickObject","x":256,"y":384},{"type":"EntityNonStickObject","x":1728,"y":640},{"type":"EntityNonStickObject","x":1408,"y":1088},{"type":"EntityNonStickObject","x":1728,"y":768},{"type":"EntityNonStickObject","x":1732,"y":704},{"type":"EntitySlickFloor","x":768,"y":1216},{"type":"EntitySlickFloor","x":644,"y":1216},{"type":"EntitySlickFloor","x":708,"y":1216},{"type":"EntitySlickFloor","x":832,"y":1216},{"type":"EntityKillBox","x":1092,"y":1280},{"type":"EntityKillBox","x":964,"y":1280},{"type":"EntityKillBox","x":1468,"y":1280},{"type":"EntityKillBox","x":1404,"y":1280},{"type":"EntityKillBox","x":1336,"y":1280},{"type":"EntityKillBox","x":1280,"y":1280},{"type":"EntityKillBox","x":1216,"y":1280},{"type":"EntityKillBox","x":1152,"y":1280},{"type":"EntityKillBox","x":1024,"y":1280},{"type":"EntityWinBox","x":1792,"y":1024},{"type":"EntityWinBox","x":1732,"y":896},{"type":"EntityWinBox","x":1796,"y":896},{"type":"EntityWinBox","x":1796,"y":960},{"type":"EntityWinBox","x":1728,"y":1024},{"type":"EntityWinBox","x":1728,"y":960}],"layer":[{"name":"background","width":4,"height":4,"linkWithCollision":false,"visible":true,"tilesetName":"media/Art/Environment/BackgroundTest.png","repeat":false,"preRender":false,"distance":"2","tilesize":480,"foreground":false,"data":[[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2]]},{"name":"Mid_layer","width":32,"height":24,"linkWithCollision":false,"visible":1,"tilesetName":"media/Art/Environment/Placeholders/SpriteSheet.png","repeat":false,"preRender":false,"distance":"1","tilesize":64,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,2,0,0,0,0,0,0,0,0,25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,2,0,0,0,0,0,0,0,0,25,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,2,0,0,0,0,0,0,0,0,25,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0],[20,23,1,1,2,0,0,0,28,0,0,0,0,25,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0],[1,19,0,0,0,0,0,0,25,0,0,0,0,25,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,0,0,0],[1,24,23,0,0,0,0,0,25,0,0,0,0,25,0,25,0,0,0,0,0,0,0,0,0,0,0,2,1,0,0,0],[1,0,19,0,0,0,0,0,25,0,0,0,0,25,26,27,0,0,0,0,0,0,0,0,0,0,0,2,1,0,0,0],[1,0,19,0,0,0,0,0,25,0,0,0,0,25,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,1,0,0],[1,22,21,0,0,0,0,0,25,0,0,0,0,27,0,0,0,0,0,0,0,0,0,0,0,0,0,17,17,1,0,0],[1,21,0,0,0,0,0,0,25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,17,17,1,0,0],[1,0,0,0,0,0,0,0,25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,17,17,1,0,0],[1,0,0,0,0,0,0,0,25,0,0,0,0,0,0,0,0,0,0,0,0,0,22,20,20,20,20,20,20,20,0,0],[1,0,18,0,0,0,0,0,25,0,0,0,0,0,0,0,0,0,0,0,0,0,19,0,1,0,0,0,0,0,0,0],[1,1,1,1,1,9,9,9,25,1,11,11,11,11,9,9,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,3,3,3,3,3,3,3,3,3,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,3,3,3,3,3,25,3,3,3,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,3,3,28,26,26,27,3,3,3,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0]]},{"name":"collision","width":32,"height":24,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":64,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0],[1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0],[1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],[1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],[1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0]]}]}/*]JSON*/;
LevelLevel5Resources=[new ig.Image('media/Art/Environment/BackgroundTest.png'), new ig.Image('media/Art/Environment/Placeholders/SpriteSheet.png')];
});