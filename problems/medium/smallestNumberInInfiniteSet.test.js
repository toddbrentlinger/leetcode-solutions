import { SmallestInfiniteSetNaive, SmallestInfiniteSet } from "./smallestNumberInInfiniteSet";

function getOutputs(operations, inputs) {
    const expectectedOutput = new Array(operations.length).fill(null);
    const actualOutput = new Array(operations.length).fill(null);

    let smallestInfiniteSetNaive = new SmallestInfiniteSetNaive();
    let smallestInfiniteSet = new SmallestInfiniteSet();

    let outputSingleNaive, outputSingle;
    for (let i = 1; i < operations.length; i++) {
        outputSingleNaive = smallestInfiniteSetNaive[operations[i]](
            ...inputs[i]
        );
        outputSingle = smallestInfiniteSet[operations[i]](
            ...inputs[i]
        );
        
        if (outputSingleNaive !== undefined) {
            expectectedOutput[i] = outputSingleNaive;
        }
        if (outputSingle !== undefined) {
            actualOutput[i] = outputSingle;
        }
    }

    return {
        expected: expectectedOutput,
        actual: actualOutput,
    };
}

function unitTest(operations, inputs) {
    let smallestInfiniteSetNaive = new SmallestInfiniteSetNaive();
    let smallestInfiniteSet = new SmallestInfiniteSet();

    let outputSingleNaive, outputSingle;
    for (let i = 1; i < operations.length; i++) {
        outputSingleNaive = smallestInfiniteSetNaive[operations[i]](
            ...inputs[i]
        );
        outputSingle = smallestInfiniteSet[operations[i]](
            ...inputs[i]
        );

        if (outputSingleNaive === undefined && outputSingle === undefined) {
            continue;
        }
    
        //expect(outputSingle).toBe(outputSingleNaive);
    }
    
    const outputs = getOutputs(operations, inputs);
    console.log(outputs.expected);
    console.log(outputs.actual);
    expect(outputs.actual).toEqual(outputs.expected);
}

test('Test 1', () => {
    const operations = ["SmallestInfiniteSet", "addBack", "popSmallest", "popSmallest", "popSmallest", "addBack", "popSmallest", "popSmallest", "popSmallest"];
    const inputs = [[], [2], [], [], [], [1], [], [], []];
    
    unitTest(operations, inputs);
});

test('Test 2', () => {
    const operations = ["SmallestInfiniteSet","popSmallest","addBack","popSmallest","addBack","addBack","popSmallest","addBack","addBack","addBack","popSmallest","popSmallest","addBack","addBack","addBack","addBack","popSmallest","addBack","addBack","addBack","popSmallest","addBack","popSmallest","addBack","addBack","popSmallest","popSmallest","popSmallest","popSmallest","addBack","popSmallest","addBack","popSmallest","popSmallest","addBack","addBack","addBack","popSmallest","popSmallest","addBack","addBack","popSmallest","popSmallest","addBack","addBack","addBack","popSmallest","popSmallest","popSmallest","addBack","addBack","addBack","popSmallest","addBack","popSmallest","popSmallest","addBack","addBack","addBack","popSmallest","addBack","popSmallest","popSmallest","popSmallest","addBack","popSmallest","popSmallest","popSmallest","addBack","popSmallest","addBack","popSmallest","popSmallest","popSmallest","popSmallest","addBack","addBack","popSmallest","popSmallest","addBack","popSmallest","popSmallest","addBack","addBack","addBack","popSmallest","popSmallest","popSmallest","addBack","addBack","addBack","popSmallest","addBack","addBack","addBack","addBack","addBack","popSmallest","popSmallest","popSmallest","addBack","popSmallest","popSmallest","popSmallest","addBack","addBack","addBack","addBack","popSmallest","addBack","popSmallest","popSmallest","addBack","addBack","addBack","addBack","addBack","addBack","addBack","popSmallest","popSmallest","addBack","popSmallest","addBack","popSmallest","addBack","addBack","addBack","popSmallest","popSmallest","addBack","popSmallest","addBack","popSmallest","addBack","popSmallest","addBack","popSmallest","addBack","popSmallest","addBack","popSmallest","addBack","addBack","addBack","addBack","popSmallest","addBack","addBack","addBack","addBack","addBack","popSmallest","popSmallest","addBack","addBack","popSmallest","popSmallest","addBack","popSmallest","popSmallest","popSmallest","addBack","popSmallest","popSmallest","addBack","addBack","popSmallest","addBack","popSmallest","addBack","addBack","popSmallest","popSmallest","popSmallest","popSmallest","addBack","addBack","popSmallest","popSmallest","addBack","addBack","popSmallest","addBack","popSmallest","addBack","addBack","popSmallest","addBack","popSmallest","addBack","popSmallest","popSmallest","addBack","popSmallest","addBack","addBack","addBack","popSmallest","popSmallest","addBack","addBack","addBack","addBack","popSmallest","popSmallest","popSmallest","addBack","popSmallest","popSmallest","popSmallest","popSmallest","addBack","popSmallest","addBack","addBack","addBack","addBack","popSmallest","popSmallest","popSmallest","addBack","addBack","addBack","popSmallest","popSmallest","addBack","addBack","popSmallest","popSmallest","popSmallest","addBack","popSmallest","popSmallest","addBack","addBack","popSmallest","addBack","addBack","addBack","addBack","popSmallest","addBack","addBack","addBack","popSmallest","addBack","popSmallest","addBack","popSmallest","popSmallest","popSmallest","popSmallest","popSmallest","addBack","addBack","addBack","popSmallest","popSmallest","popSmallest","addBack","popSmallest","popSmallest","popSmallest","popSmallest","popSmallest","popSmallest","addBack","popSmallest","popSmallest","addBack","popSmallest","popSmallest","addBack","addBack","addBack","addBack","addBack","popSmallest","popSmallest","addBack","addBack","popSmallest","popSmallest","addBack","addBack","popSmallest","popSmallest","popSmallest","popSmallest","popSmallest","popSmallest","addBack","addBack","addBack","popSmallest","popSmallest","popSmallest","addBack","popSmallest","addBack","addBack","addBack","addBack","popSmallest","addBack","addBack","popSmallest","popSmallest","popSmallest","popSmallest","addBack","addBack","addBack","addBack","addBack","popSmallest","addBack","popSmallest","addBack","addBack","popSmallest","popSmallest","addBack","popSmallest","popSmallest","addBack","popSmallest","popSmallest","addBack","popSmallest","addBack","addBack","popSmallest","popSmallest","addBack","addBack","popSmallest","addBack","popSmallest","popSmallest","popSmallest","addBack","addBack","addBack","addBack","addBack","popSmallest","addBack","addBack","popSmallest","addBack","popSmallest","addBack","addBack","popSmallest","popSmallest","addBack","addBack","addBack","popSmallest","addBack","popSmallest","popSmallest","addBack","popSmallest","popSmallest","popSmallest","addBack","addBack","popSmallest","addBack","popSmallest","addBack","addBack","popSmallest","popSmallest","popSmallest","popSmallest","addBack","popSmallest","popSmallest","addBack","addBack","popSmallest","addBack","addBack","popSmallest","popSmallest","addBack","addBack","popSmallest","addBack","popSmallest","popSmallest","addBack","popSmallest","popSmallest","popSmallest","popSmallest","addBack","addBack","popSmallest","popSmallest","addBack","addBack","popSmallest","popSmallest","addBack","addBack","addBack","popSmallest","addBack","popSmallest","popSmallest","addBack","popSmallest","popSmallest","popSmallest","popSmallest","addBack","popSmallest","addBack","popSmallest","addBack","popSmallest","addBack","popSmallest","addBack","addBack","addBack","popSmallest","popSmallest","popSmallest","popSmallest","addBack","popSmallest","addBack","addBack","addBack","popSmallest","addBack","popSmallest","addBack","addBack","addBack","addBack","addBack","popSmallest","addBack","addBack","addBack","popSmallest","addBack","popSmallest","addBack","addBack","popSmallest","addBack","addBack","addBack","popSmallest","addBack","addBack","popSmallest","popSmallest","popSmallest","popSmallest","popSmallest","addBack","addBack","addBack","addBack","popSmallest","popSmallest","popSmallest","addBack","addBack","addBack","addBack","popSmallest","addBack","addBack","popSmallest","popSmallest","addBack","addBack","addBack","addBack","addBack","addBack","popSmallest","popSmallest","popSmallest","addBack","popSmallest","addBack","popSmallest","addBack","addBack","addBack","addBack","popSmallest","popSmallest","addBack","addBack","addBack","addBack","addBack","popSmallest","addBack","popSmallest","popSmallest","popSmallest","addBack","popSmallest","addBack","addBack","addBack","addBack","popSmallest","addBack","popSmallest","addBack","addBack","popSmallest","addBack","popSmallest","addBack","popSmallest","addBack","addBack"];
    const inputs = [[],[],[509],[],[940],[454],[],[778],[928],[88],[],[],[539],[520],[220],[209],[],[624],[837],[160],[],[876],[],[858],[643],[],[],[],[],[906],[],[552],[],[],[764],[721],[100],[],[],[7],[962],[],[],[263],[753],[836],[],[],[],[788],[59],[874],[],[109],[],[],[852],[284],[467],[],[203],[],[],[],[447],[],[],[],[693],[],[666],[],[],[],[],[912],[172],[],[],[400],[],[],[732],[490],[495],[],[],[],[932],[378],[664],[],[126],[596],[707],[255],[460],[],[],[],[472],[],[],[],[430],[314],[514],[371],[],[755],[],[],[511],[956],[885],[142],[658],[471],[93],[],[],[86],[],[672],[],[643],[601],[661],[],[],[451],[],[594],[],[287],[],[807],[],[176],[],[837],[],[520],[947],[237],[809],[],[459],[448],[216],[628],[51],[],[],[434],[801],[],[],[235],[],[],[],[129],[],[],[131],[599],[],[685],[],[162],[625],[],[],[],[],[803],[778],[],[],[54],[621],[],[672],[],[830],[626],[],[550],[],[910],[],[],[741],[],[354],[354],[53],[],[],[479],[703],[546],[722],[],[],[],[459],[],[],[],[],[919],[],[788],[615],[883],[542],[],[],[],[214],[419],[473],[],[],[54],[446],[],[],[],[659],[],[],[921],[180],[],[140],[725],[80],[892],[],[491],[442],[412],[],[177],[],[218],[],[],[],[],[],[756],[349],[821],[],[],[],[532],[],[],[],[],[],[],[757],[],[],[296],[],[],[334],[630],[556],[719],[107],[],[],[248],[378],[],[],[420],[711],[],[],[],[],[],[],[203],[753],[225],[],[],[],[303],[],[580],[451],[415],[813],[],[1],[145],[],[],[],[],[245],[272],[413],[778],[416],[],[642],[],[681],[718],[],[],[531],[],[],[671],[],[],[205],[],[392],[107],[],[],[871],[967],[],[868],[],[],[],[415],[170],[235],[155],[913],[],[859],[718],[],[995],[],[22],[677],[],[],[251],[126],[537],[],[421],[],[],[967],[],[],[],[257],[94],[],[594],[],[376],[200],[],[],[],[],[812],[],[],[769],[18],[],[576],[145],[],[],[544],[21],[],[181],[],[],[358],[],[],[],[],[323],[612],[],[],[767],[34],[],[],[723],[614],[61],[],[123],[],[],[147],[],[],[],[],[468],[],[879],[],[685],[],[826],[],[319],[560],[326],[],[],[],[],[663],[],[98],[31],[599],[],[96],[],[796],[913],[292],[353],[573],[],[729],[268],[866],[],[385],[],[344],[177],[],[641],[557],[967],[],[5],[327],[],[],[],[],[],[761],[841],[861],[567],[],[],[],[33],[980],[705],[611],[],[209],[854],[],[],[910],[776],[789],[870],[703],[249],[],[],[],[295],[],[311],[],[360],[469],[757],[343],[],[],[751],[29],[538],[94],[49],[],[361],[],[],[],[638],[],[456],[398],[986],[579],[],[933],[],[584],[405],[],[463],[],[297],[],[557],[980]];
    
    unitTest(operations, inputs);
});
