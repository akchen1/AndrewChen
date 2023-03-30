import React from 'react'
import ImageGallery from 'react-image-gallery';
import "./styles/ProjectDetails.css"
const handleClickScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    }

const TasteOfHome = () => {
    const dialogueImages = [
      {
      original: "/UnityProjects/TasteOfHome/Other/DialogueNode.PNG",
      thumbnail: "/UnityProjects/TasteOfHome/Other/DialogueNode.PNG",
			description: "Visual Node Based Dialogue System"
      },
			{
				original: "/UnityProjects/TasteOfHome/Other/SingleMultiChoiceNode.PNG",
				thumbnail: "/UnityProjects/TasteOfHome/Other/SingleMultiChoiceNode.PNG",
				description: "Single and Multi Choice Nodes"
			}
    ]
    return (
        <div>
            <h3>Contributions</h3>
            <ul>
                <li><span className="span-hover" onClick={() => handleClickScroll("PlayerSystems")}>Player Systems</span></li>
                <li><span className="span-hover" onClick={() => handleClickScroll("CharacterSelection")}>Character Selection</span></li>
                <li><span className="span-hover" onClick={() => handleClickScroll("CutsceneSystem")}>Cutscene System</span></li>
                <li><span className="span-hover" onClick={() => handleClickScroll("DialogueSystem")}>Dialogue System</span></li>
                <li><span className="span-hover" onClick={() => handleClickScroll("SaveSystem")}>Automatic Save System</span></li>
                <li><span className="span-hover" onClick={() => handleClickScroll("InventorySystem")}>Inventory System</span></li>
                <li><span className="span-hover" onClick={() => handleClickScroll("CookingSystem")}>Cooking System</span></li>
            </ul>

            <div id="PlayerSystems">
                <h4>Player Systems</h4>
                <p className="indent">Player movement and player interaction.</p>
            </div>
            <div id="CharacterSelection">
                <h4>Character Selection</h4>
                <p className="indent">The player is able to choose between two characters. A Character class is used to store the characters basic information, sprites and animations. 
                    This Character class can also be used for NPC's.</p>
            </div>
            <div id="CutsceneSystem">
                <h4>Cutscene System</h4>
                <p className="indent">The system provides a simple way to create cutscene pages and to add those pages to a cutscene. 
                    A cutscene manager then loops though the pages. Each image increments based on a timer or player input.</p>
            </div>
            <div id="DialogueSystem">
                <h4>Dialogue System</h4>
                <p className="indent">The node based dialogue system was created using Unity's built in VFX Graph. In this system, there are two types of nodes: Single Choice and Multi Choice.
                    The Single Choice node provides a simple connection to the next node into the system. The Multi Choice node provides multiple connections to different nodes 
                    based on dialogue options. 
                    <br></br><br></br> 
                    This system was then integrated with this project to use the Character Class and extended to provide the ability to 
                    provide select items on certain dialogue nodes.</p>
                <ImageGallery items={dialogueImages} showPlayButton={false}/>
            </div>
            <div id="SaveSystem">
                <h4>Automatic Save System</h4>
                <p className="indent">The automatic save system allows the player to continue where they left off. Upon any interaction (dialogue, item interaction, scene change) the system 
                    saves into a JSON any neccesary data. This system is extensible as each component in the scene determines what needs to be saved and loaded. 
                </p>
            </div>
            <div id="InventorySystem">
                <h4>Inventory System</h4>
                <p className="indent">The inventory system keeps tracks of the items the player collects thoughout the game. 
                    The player can open their inventory and browse the items they have collected. </p>
            </div>
            <div id="CookingSystem">
                <h4>Cooking System</h4>
                <p className="indent">The cooking system is used in the very last stage of this game. This system was made to be extensible so that it works with any recipe. 
                    The system takes in a Recipe class to determine the possible ingredients and points for each step of the recipe.
                </p>
            </div>
        </div>
    )
}

const SoulsPath = () => {
	const backgroundImages = [
		{
		original: "/UnityProjects/SoulsPath/Other/Background.gif",
		thumbnail: "/UnityProjects/SoulsPath/Other/Background.gif",
		description: "Area transitions"
		}
	];
	const playerSystemImages = [
		{
		original: "/UnityProjects/SoulsPath/Other/Movement.PNG",
		thumbnail: "/UnityProjects/SoulsPath/Other/Movement.PNG",
		description: "Movement"
		}
	];
	const enemyAIImages = [
		{
		original: "/UnityProjects/SoulsPath/Other/Pathfinding.PNG",
		thumbnail: "/UnityProjects/SoulsPath/Other/Pathfinding.PNG",
		description: "Pathfinding"
		}
	];
	const platformImages = [
		{
		original: "/UnityProjects/SoulsPath/Other/Platform.gif",
		thumbnail: "/UnityProjects/SoulsPath/Other/Platform.gif",
		description: "Swinging Platform Demo"
		},
		{
			original: "/UnityProjects/SoulsPath/Other/Swing.PNG",
			thumbnail: "/UnityProjects/SoulsPath/Other/Swing.PNG",
			description: "Swinging Platform Structure"
		}
	];
	return (
			<div>
					<h3>Contributions</h3>
					<ul>
							<li><span className="span-hover" onClick={() => handleClickScroll("PlayerSystems")}>Player Systems</span></li>
							<li><span className="span-hover" onClick={() => handleClickScroll("EnemyAI")}>Enemy AI</span></li>
							<li><span className="span-hover" onClick={() => handleClickScroll("BackgroundParallax")}>Background Parallax</span></li>
							<li><span className="span-hover" onClick={() => handleClickScroll("Platform")}>Platforms</span></li>
					</ul>

					<div id="PlayerSystems">
							<h4>Player Systems</h4>
							<p className="indent">The required player systems for this project is the ability to move around any platform as well as the ability to dash.
							<br></br><br></br>
							To allow the player to move around the edges of a platform, a child parent nesting is used. The role of the child (which contains the sprite) is to rotate so that it's 
							upwards direction is always pointing opposite of the normal vector of the platform (ie. the upwards vector is always facing the platform). 
							This is done using a raycast to determine the normal vector and the rotation angle. 
							<br></br><br></br>
							We then move the parent based on the right direction of the child. This allows the player to move along an edge of the platform. However, when passing a 
							corner, a downwards contribution towards the platform needs to be applied to keep the player from moving into space. This downwards contribution can not be overpowering 
							as the player can get stuck at sharp corners. The final move vector is the sum of the right contribution and a factor of the downwards contribution.
							</p>
							<ImageGallery items={playerSystemImages} showPlayButton={false} showThumbnails={false}/>
							<p className="indent">
								To handle the dash, the simple way of applying a force was not sufficient. This is because we don't want the player to be able to dash into platforms, 
								as well to be able to dash in place. Therefore, a minimum dash distance is required. To do this, we use a raycast to determine the expected platform the 
								player will end up at. This expected platform is continuously calculated as swinging platforms exist in the game. 
							</p>

					</div>
					<div id="EnemyAI">
							<h4>Enemy AI</h4>
							<p className="indent">The enemy AI in this game is relatively simple. The objective for the enemy is to not get hit. A simple simple A* pathfinding algorithm 
							is used to randomly pick a new point away from the player.</p>
							<ImageGallery items={enemyAIImages} showPlayButton={false} showThumbnails={false}/>

					</div>
					<div id="BackgroundParallax">
							<h4>Backgrounds</h4>
							<p className="indent">A series of background images are used that follow the player. When the player enters a new area, a new background is assigned.</p>
							<ImageGallery items={backgroundImages} showPlayButton={false} showThumbnails={false}/>
					</div>
					<div id="Platform">
							<h4>Platforms</h4>
							<p className="indent">There are two types of platforms. Static platforms that do not move, and swinging platforms that can swing and be cut.
							The swing platform uses the joint system to simulate pendulum motion. The platform is connected to a vine which also can be cut.</p>
							<ImageGallery items={platformImages} showPlayButton={false}/>
					</div>
			</div>
	)
}

const Mare = () => {
	const enemyAIImages = [
		{
			original: "/UnityProjects/Mare/Other/NewDetection.PNG",
			thumbnail: "/UnityProjects/Mare/Other/NewDetection.PNG",
			description: "New detection system",
		},
		{
			original: "/UnityProjects/Mare/Other/OldDetection.PNG",
			thumbnail: "/UnityProjects/Mare/Other/OldDetection.PNG",
			description: "Old detection system"
		},
		{
			original: "/UnityProjects/Mare/Other/Pathfinding.PNG",
			thumbnail: "/UnityProjects/Mare/Other/Pathfinding.PNG",
			description: "Pathfinding grid"
		}
	];

	return (
			<div>
					<h3>Contributions</h3>
					<ul>
							<li><span className="span-hover" onClick={() => handleClickScroll("PlayerSystems")}>Player Systems</span></li>
							<li><span className="span-hover" onClick={() => handleClickScroll("EnemyAI")}>Enemy AI</span></li>
					</ul>

					<div id="PlayerSystems">
							<h4>Player Systems</h4>
							<p className="indent">The player systems included are basic WASD movement and the ability to switch between light and dark worlds.
							</p>
					</div>
					<div id="EnemyAI">
							<h4>Enemy AI</h4>
							<p className="indent">There are three parts to the enemy AI. Movement, detection and shooting. Each enemy moves towards the player using 
							an A* pathfinding algorithm. Once the enemy detects the player through a cone shape in front of the enemy, the enemy will shoot.</p>
							<ImageGallery items={enemyAIImages} showPlayButton={false}/>
							<p className="indent">The original system used to detect if the player was in range used a invisible cone sprite with a polygon collider set to trigger.
							This caused fps drops as the number of enemies increased as it was expensive to constantly recalculate polygon colliders. Instead a series of raycasts in the 
							shape of a cone at fixed angles apart is used. This method is less expensive and has the same functionality.</p>
					</div>
			</div>
	)
}

const Ouch = () => {
	return (
			<div>
					<h3>Contributions</h3>
					<ul>
							<li><span className="span-hover" onClick={() => handleClickScroll("PlayerSystems")}>Systems</span></li>
					</ul>
					<div id="EnemyAI">
							<h4>Systems</h4>
							<p className="indent">Each object that can be moved can be considered as a node. Each node has a mass and a rigidity (force when it breaks).
							 When each node collides with another node, a calculation is performed to determine the positioning of each node. 
							 All of these nodes make up a graph which is used to determine the weight on an object. 
							 <br></br><br></br>
							 When the player clicks start, the ceiling (also a node) falls and is added to the graph. Once the force applied to a node is greater than 
							 the rigidity of the node, it will break.
							 <br></br><br></br>
							The damage done to the player is determined by mass of the object hitting the player and the velocity of the object. If the damage exceeds 
							a certain threshold, the level is lost.
							 </p>
					</div>
			</div>
	)
}

export const ProjectData = {
    "TasteOfHome": {
        Key: 1,
        Title: "Taste Of Home",
        URL: "TasteOfHome",
        GamePath: "https://akchen.itch.io/taste-of-home",
        Img: "UnityProjects/TasteOfHome/thumbnail.PNG",
        Skills: ["Unity"],
        Summary: `Taste of Home is a casual puzzle game about cooking, memories, and family. \
        Play as Kai as you attempt to recreate your Grandma's signature dish. \
        Learn about your family's culture and origins as you embark on this cute little cooking adventure.`,
        Images: [
            {
            original: '/UnityProjects/TasteOfHome/Gameplay/Intro.gif',
            thumbnail: '/UnityProjects/TasteOfHome/Gameplay/Intro.gif',
            },
            {
            original: '/UnityProjects/TasteOfHome/Gameplay/1.PNG',
            thumbnail: '/UnityProjects/TasteOfHome/Gameplay/1.PNG',
            },
            {
            original: '/UnityProjects/TasteOfHome/Gameplay/2.PNG',
            thumbnail: '/UnityProjects/TasteOfHome/Gameplay/2.PNG',
            },
            {
            original: '/UnityProjects/TasteOfHome/Gameplay/Dialogue.gif',
            thumbnail: '/UnityProjects/TasteOfHome/Gameplay/Dialogue.gif',
            },
            {
            original: '/UnityProjects/TasteOfHome/Gameplay/3.PNG',
            thumbnail: '/UnityProjects/TasteOfHome/Gameplay/3.PNG',
            },
            {
            original: '/UnityProjects/TasteOfHome/Gameplay/4.PNG',
            thumbnail: '/UnityProjects/TasteOfHome/Gameplay/4.PNG',
            },
            {
            original: '/UnityProjects/TasteOfHome/Gameplay/Cooking.gif',
            thumbnail: '/UnityProjects/TasteOfHome/Gameplay/Cooking.gif',
            },
            {
            original: '/UnityProjects/TasteOfHome/Gameplay/5.PNG',
            thumbnail: '/UnityProjects/TasteOfHome/Gameplay/5.PNG',
            },
            {
            original: '/UnityProjects/TasteOfHome/Gameplay/6.PNG',
            thumbnail: '/UnityProjects/TasteOfHome/Gameplay/6.PNG',
            },
        ],
        Info: <TasteOfHome/>
    },
    "SoulsPath": {
        Key: 2,
        Title: "Soul's Path",
        URL: "SoulsPath",
        GamePath: "https://akchen.itch.io/souls-path",
        Img: "UnityProjects/SoulsPath/thumbnail.png",
        Skills: ["Unity"],
        Summary: `Soul’s path is a platformer game that follows Sol the shadow fox who was cursed and imprisoned in a cave eternally. \
                  To escape the cave, the shadow fox must harvest the souls of the spirit birds by killing them. \
                  In each level, Sol is challenged to jump from rock to rock to hunt for spirit fire. \
                  When enough spirit fire is harvested, the lantern will light up his way to the next level.\
                  \r\n\r\n\
                  But watch out, along the path there are dangerous vines and poisonous water. Failing to connect with a rock also kills Sol as he is a shadow that only survives in the dark.`,
        Images: [
          {
            original: '/UnityProjects/SoulsPath/Gameplay/Intro.gif',
            thumbnail: '/UnityProjects/SoulsPath/Gameplay/Intro.gif',
            description: '',
          },
          {
            original: '/UnityProjects/SoulsPath/Gameplay/1.PNG',
            thumbnail: '/UnityProjects/SoulsPath/Gameplay/1.PNG',
            description: '',
          },
          {
            original: '/UnityProjects/SoulsPath/Gameplay/Mechanic.gif',
            thumbnail: '/UnityProjects/SoulsPath/Gameplay/Mechanic.gif',
            description: '',
          },
          {
            original: '/UnityProjects/SoulsPath/Gameplay/2.png',
            thumbnail: '/UnityProjects/SoulsPath/Gameplay/2.png',
          },
          {
            original: '/UnityProjects/SoulsPath/Gameplay/Platforms.gif',
            thumbnail: '/UnityProjects/SoulsPath/Gameplay/Platforms.gif',
            description: '',
          },
          {
            original: '/UnityProjects/SoulsPath/Gameplay/Transitions.gif',
            thumbnail: '/UnityProjects/SoulsPath/Gameplay/Transitions.gif',
            description: '',
          },
          {
            original: '/UnityProjects/SoulsPath/Gameplay/3.PNG',
            thumbnail: '/UnityProjects/SoulsPath/Gameplay/3.PNG',
          },
          {
            original: '/UnityProjects/SoulsPath/Gameplay/4.PNG',
            thumbnail: '/UnityProjects/SoulsPath/Gameplay/4.PNG',
          },
          {
            original: '/UnityProjects/SoulsPath/Gameplay/Vines.gif',
            thumbnail: '/UnityProjects/SoulsPath/Gameplay/Vines.gif',
            description: '',
          },
          {
            original: '/UnityProjects/SoulsPath/Gameplay/5.PNG',
            thumbnail: '/UnityProjects/SoulsPath/Gameplay/5.PNG',
          },
          {
            original: '/UnityProjects/SoulsPath/Gameplay/6.PNG',
            thumbnail: '/UnityProjects/SoulsPath/Gameplay/6.PNG',
          }
        ],
        Info: <SoulsPath/>
      },
      "Mare": {
        Key: 3,
        Title: "Mare",
        URL: "Mare",
        GamePath: "https://zihang.itch.io/mare",
        Img: "UnityProjects/Mare/thumbnail.PNG",
        Skills: ["Unity"],
        Summary: `Seishi has the power of controlling day and night. \
                  You must dodge the spirits' attacks and survive for as long as possible. \
                  Use WASD to move, space to switch between day and night. \
                  The two-faced spirits will only move and attack in their active time, otherwise they will freeze. \
                  You can use the frozen spirits as a shield against the active spirits and kill the frozen spirits. \
                  Surviving gives you point. Killing spirits gives you bonus points. \
                  Staying in bound and close to the tower will increase your points faster.`,
        Images: [
          {
            original: '/UnityProjects/Mare/Gameplay/Light.gif',
            thumbnail: '/UnityProjects/Mare/Gameplay/Light.gif',
          },
          {
            original: '/UnityProjects/Mare/Gameplay/1.PNG',
            thumbnail: '/UnityProjects/Mare/Gameplay/1.PNG',
          },
          {
            original: '/UnityProjects/Mare/Gameplay/Switch.gif',
            thumbnail: '/UnityProjects/Mare/Gameplay/Switch.gif',
          },
          {
            original: '/UnityProjects/Mare/Gameplay/2.PNG',
            thumbnail: '/UnityProjects/Mare/Gameplay/2.PNG',
          },
          {
            original: '/UnityProjects/Mare/Gameplay/Death.gif',
            thumbnail: '/UnityProjects/Mare/Gameplay/Death.gif',
          },
          {
            original: '/UnityProjects/Mare/Gameplay/3.PNG',
            thumbnail: '/UnityProjects/Mare/Gameplay/3.PNG',
          },
        ],
        Info: <Mare/>
      },
      "Ouch": {
        Key: 4,
        Title: "Ouch!",
        URL: "Ouch",
        GamePath: "https://zihang.itch.io/ouch",
        Img: "UnityProjects/Ouch/thumbnail.PNG",
        Skills: ["Unity"],
        Summary: "Rearrange the furniture around you to protect yourself from the earthquake!",
        Images: [
          {
            original: '/UnityProjects/Ouch/Gameplay/Win.gif',
            thumbnail: '/UnityProjects/Ouch/Gameplay/Win.gif',
          },
          {
            original: '/UnityProjects/Ouch/Gameplay/1.PNG',
            thumbnail: '/UnityProjects/Ouch/Gameplay/1.PNG',
          },
          {
            original: '/UnityProjects/Ouch/Gameplay/Moving.gif',
            thumbnail: '/UnityProjects/Ouch/Gameplay/Moving.gif',
          },
          {
            original: '/UnityProjects/Ouch/Gameplay/2.PNG',
            thumbnail: '/UnityProjects/Ouch/Gameplay/2.PNG',
          },
          {
            original: '/UnityProjects/Ouch/Gameplay/3.PNG',
            thumbnail: '/UnityProjects/Ouch/Gameplay/3.PNG',
          },
        ],
        Info: <Ouch/>
      }
}
