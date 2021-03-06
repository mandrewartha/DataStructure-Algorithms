const tree = {
	"Sagar": {
		value: "Sagar",
		left: "Stanley",
		right: "Andy",
	},
	"Stanley": {
		value: "Stanley",
		left: "Jim",
		right: "Pam",
	},
	"Andy": {
		value: "Andy",
		left: "Angela",
		right: "Kevin",
	},
	"Jim": {
		value: "Jim",
		left: "Michael",
		right: null,
	},
	"Pam": {
		value: "Pam",
		left: null,
		right: "Dwight",
	},
	"Michael": {
		value: "Michael",
		left: null,
		right: null,
	},
	"Dwight": {
		value: "Dwight",
		left: null,
		right: null,
	},
	"Angela": {
		value: "Angela",
		left: null,
		right: null,
	},
	"Kevin": {
		value: "Kevin",
		left: null,
		right: null,
	},

};

let usersFriend = {
	"Stanley":1,
	"Andy":0
}

let SearchForMutualFriends = (tree, username, searchUser) => {
	if(username.value === searchUser ){
		return `It is you.\n`
	}

	if(usersFriend.hasOwnProperty(searchUser)){
		return `${searchUser} and ${username.value} are friends.\n`;
	}

	// make a queue array
	let queue = [];
	
	// populate it with the node that will be the root of your search
	queue.push(username);

	// search the queue until it is empty
	while (queue.length > 0) {

		// assign the top of the queue to variable currentNode
		let currentNode = queue[0];

		

		// if currentNode is the node we're searching for, break & alert
		if (currentNode.value === searchUser && !usersFriend.hasOwnProperty(currentNode.value)) {
			return `${searchUser} and ${username.value} have a mutual connection.\n`;
		}

		// if currentNode has a left child node, add it to the queue.
		if (currentNode.left !== null) {
			queue.push(tree[currentNode.left]);
		}

		// if currentNode has a right child node, add it to the queue.
		if (currentNode.right !== null) {
			queue.push(tree[currentNode.right]);
        }
        
		
		// remove the currentNode from the queue.
		queue.shift();
	}
	return `${searchUser} and ${username.value} don't have any mutual connections.\n`;
};


//Recommednation system

let userRecommendations = (tree, username) => {
	// make a queue array
	let queue = [];
	let userRecmList = [];
	// populate it with the node that will be the root of your search
	queue.push(username);

	// search the queue until it is empty
	while (queue.length > 0) {

		// assign the top of the queue to variable currentNode
		let currentNode = queue[0];



		//Checking for users own username and user friends
		if(currentNode.value !== username.value && !usersFriend.hasOwnProperty(currentNode.value)){
			userRecmList.push(currentNode.value);
		}

		// if currentNode has a left child node, add it to the queue.
		if (currentNode.left !== null) {
			queue.push(tree[currentNode.left]);
		}

		// if currentNode has a right child node, add it to the queue.
		if (currentNode.right !== null) {
			queue.push(tree[currentNode.right]);
        }
        
		
		// remove the currentNode from the queue.
		queue.shift();
	}

	return userRecmList;
};


console.log(SearchForMutualFriends(tree,tree['Sagar'],'Michael'));

// userRecommendations(tree,tree['Sagar']);
