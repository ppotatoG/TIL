// const fs = require('fs');
// const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const input = `BruteForce 3.0 F
Greedy 1.0 F
DivideandConquer 2.0 F
DynamicProgramming 3.0 F
DepthFirstSearch 4.0 F
BreadthFirstSearch 3.0 F
ShortestPath 4.0 F
DisjointSet 2.0 F
MinimumSpanningTree 2.0 F
TopologicalSorting 1.0 F
LeastCommonAncestor 2.0 F
SegmentTree 4.0 F
EulerTourTechnique 3.0 F
StronglyConnectedComponent 2.0 F
BipartiteMatching 2.0 F
MaximumFlowProblem 3.0 F
SuffixArray 1.0 F
HeavyLightDecomposition 4.0 F
CentroidDecomposition 3.0 F
SplayTree 1.0 F`.trim().split('\n');

const SUBJECT_TABLE = {
    'A+': 4.5,
    'A0': 4.0,
    'B+': 3.5,
    'B0': 3.0,
    'C+': 2.5,
    'C0': 2.0,
    'D+': 1.5,
    'D0': 1.0,
    'F': 0,
}

const [totalGrade, totalPoints] = input.reduce((a, c) => {
    const [_, grade, rating] = c.split(' ');

    if (rating === 'P') return a;

    const intGrage = Number(grade);

    a[0] += intGrage;
    a[1] += intGrage * SUBJECT_TABLE[rating] || 0;
    
    return a;
}, [0, 0]);

console.log((totalPoints / totalGrade).toFixed(6))