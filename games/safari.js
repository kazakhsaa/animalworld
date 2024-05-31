const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

let animalData = [
    { name: 'Лев', image: 'lion', fact: 'Левы живут в саваннах и охотятся в стаях.' },
    { name: 'Слон', image: 'elephant', fact: 'Слоны являются самыми крупными наземными животными.' },
    { name: 'Жираф', image: 'giraffe', fact: 'Жирафы имеют самые длинные шеи среди всех животных.' }
];

function preload() {
    this.load.image('background', 'background.jpg'); // Фон сафари
    this.load.image('lion', 'lion.png'); // Изображение льва
    this.load.image('elephant', 'elephant.png'); // Изображение слона
    this.load.image('giraffe', 'giraffe.png'); // Изображение жирафа
}

function create() {
    this.add.image(400, 300, 'background');

    animalData.forEach((animal, index) => {
        let animalSprite = this.add.sprite(200 + index * 200, 300, animal.image).setInteractive();
        animalSprite.on('pointerdown', () => {
            alert(animal.fact);
        });
    });

    let missionText = this.add.text(10, 10, 'Нажмите на животных, чтобы узнать о них больше!', { font: '16px Arial', fill: '#000' });
}

function update() {
    // Логика обновления игры
}
