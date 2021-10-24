import React, { Component, createRef } from 'react';
import TWEEN, { Tween } from '@tweenjs/tween.js';
import './index.css';
import AlloyFinger from 'alloyfinger';



function createToRemoveStyle() {
    return {
        x: -800,
        y: 140,
        rotate: -40,
        scale: 1,
        originX: 0,
        originY: 0,
        opacity: 1,
        zIndex: 0
    }
}
function createToShowOneStyle() {
    return {
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        originX:0,
        originY: 0,
        opacity: 1,
        zIndex: 5
    }
}


function createToShowTwoStyle() {
    return {
        x: 4,
        y: 0,
        rotate: 8,
        scale: 0.9,
        originX:300,
        originY: 400,
        opacity: 1,
        zIndex: 4
    }
}

function createToShowThreeStyle() {
    return {
        x: -4,
        y: 0,
        rotate: -8,
        scale: 0.9,
        originX:0,
        originY: 400,
        opacity: 1,
        zIndex: 3
    }
}

function createToShowOtherStyle() {
    return {
        x: 0,
        y: 0,
        rotate: 0,
        scale: 0.6,
        originX:0,
        originY: 0,
        opacity: 0,
        zIndex: 2
    }
}

export default class Cards extends Component {

    cardsWrap = createRef();

    card1Ref = createRef();
    card2Ref = createRef();
    card3Ref = createRef();
    card4Ref = createRef();
    card5Ref = createRef();

    state = {
        len: 5,
        currentIndex: 0,
        cardsStyles: [
            {
                x: 0,
                y: 0,
                rotate: 0,
                scale: 1,
                originX:0,
                originY: 0,
                opacity: 1,
                zIndex: 5
            },
            {
                x: 4,
                y: 0,
                rotate: 8,
                scale: 0.9,
                originX:300,
                originY: 400,
                opacity: 1,
                zIndex:4
            },
            {
                x: -4,
                y: 0,
                rotate: -8,
                scale: 0.9,
                originX:0,
                originY: 400,
                opacity: 1,
                zIndex:3
            },
            {
                x: 0,
                y: 0,
                rotate: 0,
                scale: 0.6,
                originX:0,
                originY: 0,
                opacity: 0,
                zIndex:2
            },{
                x: -800,
        y: 140,
        rotate: -40,
        scale: 1,
        originX: 0,
        originY: 0,
        opacity: 1,
        zIndex: 0
            }
        ]
    }

    componentDidMount() {





        function animate(time) {
            requestAnimationFrame(animate);
            TWEEN.update();
        }

        requestAnimationFrame(animate);


        const af = new AlloyFinger(this.cardsWrap.current, {
            swipe: (evt) => {
                console.log('swipe', evt);

                const { direction } = evt;
                if (direction === 'Left') {
                    this.removeCard();
                } else if (direction === 'Right') {
                    this.restoreCard();
                }
            }
        })
    }

    removeCard = () => {
        const currentIndex = this.state.currentIndex;
        const currentCardStyle = this.state.cardsStyles[currentIndex];



        const removeTween = new TWEEN.Tween(currentCardStyle).to(createToRemoveStyle(), 400).onUpdate((style) => {
            const cardsStyles = this.state.cardsStyles;
            cardsStyles[currentIndex] = style;
            this.setState({
                cardsStyles,
            })
        }).start().onComplete(() => {
            console.log('com')
            this.setState({ currentIndex: (currentIndex + 1) % 5})
        })


        const base2 = {x: 4, y:0, rotate: 8, scale: 0.9, originX: 300, originY: 400 };

        



        // `translate(4px, 0) rotate(8deg) scale(0.9, 0.9)`,

        const tween2 = new TWEEN.Tween(this.state.cardsStyles[(currentIndex + 1 % 5)]).to(createToShowOneStyle(), 400).easing(TWEEN.Easing.Quartic.InOut).onUpdate((style) => {
            const cardsStyles = this.state.cardsStyles;
            cardsStyles[currentIndex + 1] = style;
            this.setState({
                cardsStyles,
            })

        }).start();

        const tween3 = new TWEEN.Tween(this.state.cardsStyles[currentIndex + 2  % 5]).to(createToShowTwoStyle(), 400).onUpdate((style) => {
            const cardsStyles = this.state.cardsStyles;
            cardsStyles[currentIndex + 2] = style;
            this.setState({
                cardsStyles,
            })


        }).start();

        
        //  len = 5;
        // curent 3
        

        // const base4 = {x: 0, y:0, rotate: 0, scale: 0.8, originX: 0, originY: 0, opacity: 0};
        const tween4 = new TWEEN.Tween(this.state.cardsStyles[(currentIndex + 3) % 5]).to(createToShowThreeStyle(), 400).easing(TWEEN.Easing.Quadratic.Out).onUpdate((style) => {
            const cardsStyles = this.state.cardsStyles;
            cardsStyles[currentIndex + 3] = style;
            this.setState({
                cardsStyles,
            })
        }).start()

        const tween5 = new TWEEN.Tween(this.state.cardsStyles[(currentIndex + 4) % 5]).to(createToShowOtherStyle(), 400).easing(TWEEN.Easing.Quadratic.Out).onUpdate((style) => {
            const cardsStyles = this.state.cardsStyles;
            cardsStyles[currentIndex + 4] = style;
            this.setState({
                cardsStyles,
            })
        }).start()


    }

    restoreCard() {
        const currentIndex = this.state.currentIndex;
        const currentCardStyle = this.state.cardsStyles[currentIndex];



        const removeTween = new TWEEN.Tween(currentCardStyle).to(createToRemoveStyle(), 400).onUpdate((style) => {
            const cardsStyles = this.state.cardsStyles;
            cardsStyles[currentIndex] = style;
            this.setState({
                cardsStyles,
            })
        }).start().onComplete(() => {
            console.log('com')
            this.setState({ currentIndex: (currentIndex + 1) %5})
        })

        const tween2 = new TWEEN.Tween(this.state.cardsStyles[(currentIndex + 1 % 5)]).to(createToShowOneStyle(), 400).easing(TWEEN.Easing.Quartic.InOut).onUpdate((style) => {
            const cardsStyles = this.state.cardsStyles;
            cardsStyles[currentIndex + 1] = style;
            this.setState({
                cardsStyles,
            })

        }).start();

        const tween3 = new TWEEN.Tween(this.state.cardsStyles[currentIndex + 2  % 5]).to(createToShowTwoStyle(), 400).onUpdate((style) => {
            const cardsStyles = this.state.cardsStyles;
            cardsStyles[currentIndex + 2] = style;
            this.setState({
                cardsStyles,
            })


        }).start();

        
        const tween4 = new TWEEN.Tween(this.state.cardsStyles[(currentIndex + 3) % 5]).to(createToShowThreeStyle(), 400).easing(TWEEN.Easing.Quadratic.Out).onUpdate((style) => {
            const cardsStyles = this.state.cardsStyles;
            cardsStyles[currentIndex + 3] = style;
            this.setState({
                cardsStyles,
            })
        }).start()

        const tween5 = new TWEEN.Tween(this.state.cardsStyles[(currentIndex + 4) % 5]).to(createToShowOtherStyle(), 400).easing(TWEEN.Easing.Quadratic.Out).onUpdate((style) => {
            const cardsStyles = this.state.cardsStyles;
            cardsStyles[currentIndex + 4] = style;
            this.setState({
                cardsStyles,
            })
        }).start()


    }



    getShowOneStyle() {
        return {
            transform: 'none',
            opacity: 1,
        }
    }

    getShowTwoStyle() {
        return {
            transform: `translate(4px, 0) rotate(8deg) scale(0.9, 0.9)`,
            transformOrigin: `300px 400px`, // 卡片宽高
        }
    }

    getShowThreeStyle() {
        return {
            transform: `translate(-4px, 0) rotate(-8deg) scale(0.9, 0.9)`,
            transformOrigin: `0 400px`, // 卡片宽高
        }
    }

    getShowOthersStyle() {
        return {
            transform: 'none',
            opacity: 0,
        }

    }

    getShowOutStyle() {
        return {
            transform: `translate(-100%,40px)`,
        }
    }


    initDomPos() {
        return {
            card1Style: this.getShowOneStyle(),
            card2Style: this.getShowTwoStyle(),
            card3Style: this.getShowThreeStyle(),
            card4Style: this.getShowOthersStyle(),
            card5Style: this.getShowOthersStyle(),
        }
    }

    render() {

        const { cardsStyles } = this.state;


        return (

            <div className="cards-list" ref={this.cardsWrap} >
                <Card className="card card-1" style={cardsStyles[0]}>111111</Card>
                <Card className="card card-2" style={cardsStyles[1]} >222222</Card>
                <Card className="card card-3" style={cardsStyles[2]} >33333</Card>
                <Card className="card card-4" style={cardsStyles[3]}>44444</Card>
                <Card className="card card-5" style={cardsStyles[4]}>55555</Card>
            </div>
        )
    }
}

function Card(props) {
    const { x, y, scale, opacity, rotate, originX, originY, zIndex  } = props.style;
    


    return (
        <div className={`${props.className}`} style={{
            transform: `translate(${x}px, ${y}px) scale(${scale}, ${scale}) rotate(${rotate}deg)`,
            opacity: opacity,
            transformOrigin: `${originX}px ${originY}px`,
            zIndex,
        }}>{props.children}</div>
    )
}