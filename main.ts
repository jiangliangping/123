/*
Copyright (C): 2010-2019, Shenzhen Yahboom Tech
modified from liusen
load dependency
"mbit": "file:../pxt-mbit"
*/

/*****************************************************************************************************************************************
 *  输入类 *****************************************************************************************************************************
 ****************************************************************************************************************************************/

//% color="#808080" weight=23 icon="\uf11c"
namespace mbit_输入类 {

    export enum enRocker {
        //% blockId="Nostate" block="无"
        Nostate = 0,
        //% blockId="Up" block="上"
        Up,
        //% blockId="Down" block="下"
        Down,
        //% blockId="Left" block="左"
        Left,
        //% blockId="Right" block="右"
        Right,
        //% blockId="Press" block="按下"
        Press
    }

    export enum enButton {
        //% blockId="Press" block="按下"
        Press = 0,
        //% blockId="Realse" block="松开"
        Realse = 1
    }
		export enum Push_Button {
        //% blockId="red" block="红色"
        red = 0,
        //% blockId="blue" block="蓝色"
        blue,
        //% blockId="green" block="绿色"
        green,
        //% blockId="yellow" block="黄色"
        yellow
    }
		//% blockId=mbit_Push_botton block="Push_botton|value1 %value1|value %value"
    //% weight=100
    //% blockGap=10
    //% color="#808080"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=6
    export function Push_botton(pin: Push_Button, value: enRocker): boolean {
				
				switch (Push_Button) {
					case red:
						pins.setPull(DigitalPin.P13, PinPullMode.PullUp);
            let a = pins.digitalReadPin(DigitalPin.P13);
						break;
					
					case green:
						pins.setPull(DigitalPin.P14, PinPullMode.PullUp);
            let a = pins.digitalReadPin(DigitalPin.P14);
						break;
					
					case blue:
						pins.setPull(DigitalPin.P15, PinPullMode.PullUp);
            let a = pins.digitalReadPin(DigitalPin.P15);
						break;
					
					case yellow:
						pins.setPull(DigitalPin.P16, PinPullMode.PullUp);
            let a = pins.digitalReadPin(DigitalPin.P16);
						break;
					
				}
    
        if (a == 0)
            now_state = enRocker.Press;
        if (now_state == value)
            return true;
        else
            return false;

    }
    //% blockId=mbit_Rocker block="Rocker|VRX %pin1|VRY %pin2|SW %pin3|value %value"
    //% weight=99
    //% blockGap=10
    //% color="#808080"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=6
    export function Rocker(pin1: AnalogPin, pin2: AnalogPin, pin3: DigitalPin, value: enRocker): boolean {

        pins.setPull(pin3, PinPullMode.PullUp);
        let x = pins.analogReadPin(pin1);
        let y = pins.analogReadPin(pin2);
        let z = pins.digitalReadPin(pin3);
        let now_state = enRocker.Nostate;

        if (x < 100) // 上
        {

            now_state = enRocker.Up;

        }
        else if (x > 700) //
        {

            now_state = enRocker.Down;
        }
        else  // 左右
        {
            if (y < 100) //右
            {
                now_state = enRocker.Right;
            }
            else if (y > 700) //左
            {
                now_state = enRocker.Left;
            }
        }
        if (z == 0)
            now_state = enRocker.Press;
        if (now_state == value)
            return true;
        else
            return false;

    }

    //% blockId=mbit_Button block="Button|pin %pin|value %value"
    //% weight=98
    //% blockGap=10
    //% color="#808080"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=5
    export function Button(pin: DigitalPin, value: enButton): boolean {

        pins.setPull(pin, PinPullMode.PullUp);
        if (pins.digitalReadPin(pin) == value) {
            return true;
        }
        else {
            return false;
        }

    }  
}

