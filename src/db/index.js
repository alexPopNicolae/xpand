class PlanetsDB {
    constructor() {
        this.planets = [
            {
                planetId:1,
                name: 'earth',
                image: 'earth.png',
                description: 'Most beatuful planet from the entire universe',
                status: 'OK',
                captain:'Spartacus John',
                robots: ['T1', 'T2', 'T33']
            },
            {
                planetId:2,
                name: 'Mars',
                image: 'mars.png',
                description: 'The readest planet from our solar system',
                status: '!OK',
                captain:'Alex Pop',
                robots: ['T11', 'T22', 'T333']
            },
            {
                planetId:3,
                name: 'Venus',
                image: 'venus.png',
                description: 'The hottest planet from the solar system',
                status: '!OK',
                captain: 'Eva Brains',
                robots: ['T0', 'T14', 'T66']
            },
            {
                planetId:4,
                name: 'sigma 17',
                image: 'sigma17.png',
                description: 'No description yet',
                status: 'En route',
                captain: null,
                robots: []
            }
        ];
    }

    getPlanets() {
        return this.planets;
    }

    getPlanetById(planetId) {
        return this.planets.find(planet => planet.planetId === planetId);
    }

    updatePlanet(newPlanet) {
    this.planets =  this.planets.map(planet => {
            if(planet.planetId === newPlanet.planetId) {
               return newPlanet;
            }
            return planet;
        });
    }
}
export default new PlanetsDB();

