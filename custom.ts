
/**
* Nutze diese Datei für benutzerdefinierte Funktionen und Blöcke.
* Weitere Informationen unter https://makecode.microbit.org/blocks/custom
*/

/**
 * Custom blocks color=#0fbc11
 */

//% weight=50 color=#0fbc00 icon="\uf14b"
namespace test_z {
    /**
     * Zeichnet eine Linie von
     * @param (x0,y0) nach (x1,y1)
     */
    //% block="zeichne Linie von (x0,y0) %x0%y0 nach (x1,y1) %x1%y1"
    //% inlineInputMode=inline
    export function Linie(x0: number, y0: number, x1: number, y1: number) {
        let sx:number
        let sy:number
        let err:number
        let e2:number

        let x = x0
        let y = y0
        let dx = Math.abs(x1 - x0)
        let dy = -1 * Math.abs(y1 - y0)
        if (x0 < x1) {
            sx = 1
        } else {
            sx = -1
        }
        if (y0 < y1) {
            sy = 1
        } else {
            sy = -1
        }
        err = dx + dy
        while (true) {
            led.plot(x, y)
            if (x == x1 && y == y1) {
                break;
            }
            e2 = 2 * err
            if (e2 > dy) {
                err += dy
                x += sx
            }
            if (e2 < dx) {
                err += dx
                y += sy
            }
        }
    }
}
