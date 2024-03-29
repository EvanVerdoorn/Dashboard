/**
 * Class StartScreen handles the StartScreen, it's attributes and it's methods
 */
/// <reference path='GameScreen.ts' />

class StartScreen extends GameScreen {

    //adds basic attributes to class
    private levelBackground: HTMLImageElement;
    private shouldStartLevel: boolean = false;


    //add the constructor
    public constructor(
        game: Game,
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        img: HTMLImageElement,
        keyboardListener: KeyboardListener

    ) {
        //Add a super constructor which will handle the level when it is drawn
        super(game, canvas, ctx, img, keyboardListener);



    }

    /**
    * method to initialize the screen
    */
    public listen(input: KeyboardListener) {
        if (input.isKeyDown(KeyboardListener.KEY_ENTER)) {
            this.shouldStartLevel = true
        }
    }
    /**
     * method to handle detect if the game should switch screens.
     */
    public adjust(game: Game) {
        if (this.shouldStartLevel) {
            game.switchScreen();
        }
    }

    public draw(ctx: CanvasRenderingContext2D) {
        const backgroundImage = "./assets/images/background/startscreen.jpg";
        this.loadImage(backgroundImage, this.drawBackgroundToScreen);
        this.writeTextToCanvas(ctx, "You", 200, this.canvas.width/2, 300);
        this.writeTextToCanvas(ctx, "DRUK OP ENTER OM TE STARTEN", 30, this.canvas.width/2, 500);
    }


}

