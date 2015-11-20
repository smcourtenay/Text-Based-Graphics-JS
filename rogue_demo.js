/*
window.alert("hello");

Initial test to make sure all the files are in the right place.
*/

var str_map = '##+#########' +  // todo: remove player, creatures, objects
            '\n#@....######' +
            '\n#...R.##...#' +
            '\n#.$...##.p.#' +
            '\n###+####...#' +
            '\n###....=..p#' +
            '\n########...#' +
            '\n############';

var map = [ [ '#', '#', '+', '#', '#', '#', '#', '#', '#', '#', '#', '#' ], // todo: remove player, creatures, objects
            [ '#', '@', '.', '.', '.', '.', '#', '#', '#', '#', '#', '#' ],
            [ '#', '.', '.', '.', 'R', '.', '#', '#', '.', '.', '.', '#' ],
            [ '#', '.', '$', '.', '.', '.', '#', '#', '.', 'w', '.', '#' ],
            [ '#', '#', '#', '+', '#', '#', '#', '#', '.', '.', '.', '#' ],
            [ '#', '#', '#', '.', '.', '.', '.', '=', '.', '.', 'w', '#' ],
            [ '#', '#', '#', '#', '#', '#', '#', '#', '.', '.', '.', '#' ],
            [ '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#' ],
            [ '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#' ],
            [ '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#' ],
            [ '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#' ],
            [ '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#' ],
          ];


var renderCell = cell => '<td>' + cell.toString() + '</td>'.
    renderRow = row => '<tr>' + (row.map(renderCell).join('')) + '</tr>',
    renderMap  = mapdata => '<table><tbody>' +(mapdata.map(renderRow).join('')) + '</table></tbody>'

var mapStringToGameMap = mapString => mapString.split('\n').map(row => row.split(''));


function onStart(){
  document.body.innerHTML = renderMap(mapStringToGameMap(str_map));
}

window.onload = onStart;
