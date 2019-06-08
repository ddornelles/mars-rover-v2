// Rover Object Goes Here
// ======================
const cardinal = ['North', 'South', 'East', 'West'];
const [n, s, e, w] = cardinal;

const roverOne = {
  name: "Rover 1",
  direction: cardinal[0], // N will be the defaut direction
  x: 0,
  y: 0,
  obstacles: ['wall', 'hole'],
};
roverOne.travelLog = [];
roverOne.lastPosition = [];

const roverTwo = {
  name: "Rover 2",
  direction: cardinal[0], // N will be the defaut direction
  x: 0,
  y: 9,
  obstacles: ['wall', 'hole'],
  travelLog: [],
};
roverTwo.travelLog = [];
roverTwo.lastPosition = [];

const grid = [
  ['square', 'square', 'square', 'square', 'square', 'square', 'square', 'square', 'square', 'square'],
  ['square', 'wall', 'square', 'wall', 'square', 'wall', 'square', 'wall', 'square', 'square'],
  ['square', 'square', 'square', 'square', 'square', 'square', 'square', 'square', 'square', 'square'],
  ['hole', 'square', 'hole', 'square', 'hole', 'square', 'hole', 'square', 'hole', 'square'],
  ['square', 'square', 'square', 'square', 'square', 'square', 'square', 'square', 'square', 'square'],
  ['square', 'wall', 'square', 'wall', 'square', 'wall', 'square', 'wall', 'square', 'square'],
  ['square', 'square', 'square', 'square', 'square', 'square', 'square', 'square', 'square', 'square'],
  ['hole', 'square', 'hole', 'square', 'hole', 'square', 'hole', 'square', 'hole', 'square'],
  ['square', 'square', 'square', 'square', 'square', 'square', 'square', 'square', 'square', 'square'],
  ['square', 'wall', 'square', 'wall', 'square', 'wall', 'square', 'wall', 'square', 'square'],
];

function turnLeft(rover) {
  console.log('turnLeft was called!');
  switch (rover.direction) {
    case n:
      rover.direction = w;
      console.log(`${rover.name} is now facing ${rover.direction}`);
      break;
    case s:
      rover.direction = e;
      console.log(`${rover.name} is now facing ${rover.direction}`);
      break;
    case e:
      rover.direction = n;
      console.log(`${rover.name} is now facing ${rover.direction}`);
      break;
    case w:
      rover.direction = s;
      console.log(`${rover.name} is now facing ${rover.direction}`);
      break;
    default:
      null;
      break;
  }
}

function turnRight(rover) {
  console.log('turnRight was called!');
  if (rover.direction === n) {
    rover.direction = e;
    console.log(`${rover.name} is now facing ${rover.direction}.`);
  } else if (rover.direction === s) {
    rover.direction = w;
    console.log(`${rover.name} is now facing ${rover.direction}.`);
  } else if (rover.direction === e) {
    rover.direction = s;
    console.log(`${rover.name} is now facing ${rover.direction}.`);
  } else if (rover.direction === w) {
    rover.direction = n;
    console.log(`${rover.name} is now facing ${rover.direction}.`);
  }
}

function moveForward(rover) {
  console.log('moveForward was called');
  switch (rover.direction) {
    case n:
      if (grid[rover.y - 1][rover.x] === rover.obstacles[0]) {
        console.log(`${rover.name} can't move forward because there is a wall on the way.`);
      } else if (grid[rover.y - 1][rover.x] === rover.obstacles[1]) {
        console.log(`${rover.name} can't move forward because there is a wall on the way.`);
      } else if (rover.x === roverOne.lastPosition[0] && rover.y - 1 === roverOne.lastPosition[1]) {
        console.log(`${rover.name} can't move forward or it will crash.`);
      } else if (rover.x === roverTwo.lastPosition[0] && rover.y - 1 === roverTwo.lastPosition[1]) {
        console.log(`${rover.name} can't move forward or it will crash.`);
      } else {
        rover.y -= 1;
      }
      break;
    case s:
      if (grid[rover.y + 1][rover.x] === rover.obstacles[0]) {
        console.log(`${rover.name} can't move forward because there is a ${rover.obstacles[0]} on the way.`);
      } else if (grid[rover.y + 1][rover.x] === rover.obstacles[1]) {
        console.log(`${rover.name} can't move forward because there is a ${rover.obstacles[1]} on the way.`);
      } else if (rover.x === roverOne.lastPosition[0] && rover.y + 1 === roverOne.lastPosition[1]) {
        console.log(`${rover.name} can't move forward or it will crash.`);
      } else if (rover.x === roverTwo.lastPosition[0] && rover.y + 1 === roverTwo.lastPosition[1]) {
        console.log(`${rover.name} can't move forward or it will crash.`);
      } else {
        rover.y += 1;
      }
      break;
    case e:
      if (grid[rover.y][rover.x + 1] === rover.obstacles[0]) {
        console.log(`${rover.name} can't move forward because there is a ${rover.obstacles[0]} on the way.`);
      } else if (grid[rover.y][rover.x + 1] === rover.obstacles[1]) {
        console.log(`${rover.name} can't move forward because there is a ${rover.obstacles[1]} on the way.`);
      } else if (rover.x + 1 === roverOne.lastPosition[0] && rover.y === roverOne.lastPosition[1]) {
        console.log(`${rover.name} can't move forward or it will crash.`);
      } else if (rover.x + 1 === roverTwo.lastPosition[0] && rover.y === roverTwo.lastPosition[1]) {
        console.log(`${rover.name} can't move forward or it will crash.`);
      } else {
        rover.x += 1;
      }
      break;
    case w:
      if (grid[rover.y][rover.x - 1] === rover.obstacles[0]) {
        console.log(`${rover.name} can't move forward because there is a ${rover.obstacles[0]} on the way.`);
      } else if (grid[rover.y][rover.x - 1] === rover.obstacles[1]) {
        console.log(`${rover.name} can't move forward because there is a ${rover.obstacles[1]} on the way.`);
      } else if (rover.x - 1 === roverOne.lastPosition[0] && rover.y === roverOne.lastPosition[1]) {
        console.log(`${rover.name} can't move forward or it will crash.`);
      } else if (rover.x - 1 === roverTwo.lastPosition[0] && rover.y === roverTwo.lastPosition[1]) {
        console.log(`${rover.name} can't move forward or it will crash.`);
      } else {
        rover.x -= 1;
      }
      break;
    default:
      null;
      break;
  }
  rover.travelLog.push([rover.x, rover.y]);
  if (rover === roverOne) {
    roverOne.lastPosition = [rover.x, rover.y];
  } else if (rover === roverTwo) {
    roverTwo.lastPosition = [rover.x, rover.y];
  }
  console.log(`${rover.name}'s coordinates are [${rover.x},${rover.y}]`);
}

function moveBackward(rover) {
  console.log('movebackward was called');
  switch (rover.direction) {
    case n:
      if (grid[rover.y + 1][rover.x] === rover.obstacles[0]) {
        console.log(`${rover.name} can't move forward because there is a ${rover.obstacles[0]} on the way.`);
      } else if (grid[rover.y + 1][rover.x] === rover.obstacles[1]) {
        console.log(`${rover.name} can't move forward because there is a ${rover.obstacles[1]} on the way.`);
      } else if (rover.x === roverOne.lastPosition[0] && rover.y + 1 === roverOne.lastPosition[1]) {
        console.log(`${rover.name} can't move forward or it will crash.`);
      } else if (rover.x === roverTwo.lastPosition[0] && rover.y + 1 === roverTwo.lastPosition[1]) {
        console.log(`${rover.name} can't move forward or it will crash.`);
      } else {
        rover.y += 1;
      }
      break;
    case s:
      if (grid[rover.y - 1][rover.x] === rover.obstacles[0]) {
        console.log(`${rover.name} can't move forward because there is a ${rover.obstacles[0]} on the way.`);
      } else if (grid[rover.y - 1][rover.x] === rover.obstacles[1]) {
        console.log(`${rover.name} can't move forward because there is a ${rover.obstacles[1]} on the way.`);
      } else if (rover.x === roverOne.lastPosition[0] && rover.y - 1 === roverOne.lastPosition[1]) {
        console.log(`${rover.name} can't move forward or it will crash.`);
      } else if (rover.x === roverTwo.lastPosition[0] && rover.y - 1 === roverTwo.lastPosition[1]) {
        console.log(`${rover.name} can't move forward or it will crash.`);
      } else {
        rover.y -= 1;
      }
      break;
    case e:
      if (grid[rover.y][rover.x - 1] === rover.obstacles[0]) {
        console.log(`${rover.name} can't move forward because there is a ${rover.obstacles[0]} on the way.`);
      } else if (grid[rover.y][rover.x - 1] === rover.obstacles[1]) {
        console.log(`${rover.name} can't move forward because there is a ${rover.obstacles[1]} on the way.`);
      } else if (rover.x - 1 === roverOne.lastPosition[0] && rover.y === roverOne.lastPosition[1]) {
        console.log(`${rover.name} can't move forward or it will crash.`);
      } else if (rover.x - 1 === roverTwo.lastPosition[0] && rover.y === roverTwo.lastPosition[1]) {
        console.log(`${rover.name} can't move forward or it will crash.`);
      } else {
        rover.x -= 1;
      }
      break;
    case w:
      if (grid[rover.y][rover.x + 1] === rover.obstacles[0]) {
        console.log(`${rover.name} can't move forward because there is a ${rover.obstacles[0]} on the way.`);
      } else if (grid[rover.y][rover.x + 1] === rover.obstacles[1]) {
        console.log(`${rover.name} can't move forward because there is a ${rover.obstacles[1]} on the way.`);
      } else if (rover.x + 1 === roverOne.lastPosition[0] && rover.y === roverOne.lastPosition[1]) {
        console.log(`${rover.name} can't move forward or it will crash.`);
      } else if (rover.x + 1 === roverTwo.lastPosition[0] && rover.y === roverTwo.lastPosition[1]) {
        console.log(`${rover.name} can't move forward or it will crash.`);
      } else {
        rover.x += 1;
      }
      break;
    default:
      null;
      break;
  }
  rover.travelLog.push([[rover.x], [rover.y]]);
  console.log(`${rover.name}'s coordinates are ${rover.x},${rover.y}`);
}

const commands = ['f', 'b', 'r', 'l'];
const [f, b, r, l] = commands;

function goForward(rover, commands) {
  const alertGrid = `Your position is [${rover.x},${rover.y}] and ${rover.name} can't be out of grid!`;
  for (let c = 0; c < commands.length; c += 1) {
    switch (commands[c]) {
      case f:
        if (rover.y === 0 && rover.direction === n) {
          console.log(alertGrid);
        } else if (rover.x === 0 && rover.direction === w) {
          console.log(alertGrid);
        } else if (rover.y === 9 && rover.direction === s) {
          console.log(alertGrid);
        } else if (rover.x === 9 && rover.direction === e) {
          console.log(alertGrid);
        } else {
          moveForward(rover);
        }
        break;
      case b:
        if (rover.y === 9 && rover.direction === n) {
          console.log(alertGrid);
        } else if (rover.x === 9 && rover.direction === w) {
          console.log(alertGrid);
        } else if (rover.y === 0 && rover.direction === s) {
          console.log(alertGrid);
        } else if (rover.x === 0 && rover.direction === e) {
          console.log(alertGrid);
        } else {
          moveBackward(rover);
        }
        break;
      case r:
        turnRight(rover);
        break;
      case l:
        turnLeft(rover);
        break;
      default:
        console.log('Input must be the first letter of one or more of these commands: (f)orward, (b)ackward, (r)ight, or (l)eft.');
        break;
    }
  }
}
