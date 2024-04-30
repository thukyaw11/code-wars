// not finished yet
function determinant(m) {
  let det = 0;
  if (m.length === 2) {
    // 2x2 matrix
    det = m[0][0] * m[1][1] - m[0][1] * m[1][0];
  } else if (m.length === 3) {
    // 3x3 matrix
    // let det1 = (m[0][0] * ((m[1][1]*m[2][2]) - (m[1][2]*m[2][1])));
    // let det2 = (m[0][1] * ((m[1][0]*m[2][2]) - (m[2][0]*m[1][2])));
    // let det3 = (m[0][2] * ((m[1][0]*m[2][1]) - (m[2][0]*m[1][1])));
    // console.log(det1, det2, det3)
    // det = det1 - det2 + det3;

    // Initialize determinant value
    let determinant = 0;

    // Calculate determinant using nested for loops
    for (let i = 0; i < 3; i++) {
      let product = 1;
      let antiProduct = 1;

      for (let j = 0; j < 3; j++) {
        product *= m[j][(i + j) % 3];
        antiProduct *= m[j][(i - j + 3) % 3];
      }

      determinant += product - antiProduct;
    }
  } else {
    return m[0][0];
  }

  return det;
}

// determinant([[2,4,2],[3,1,1],[1,2,0]])
// determinant([ [4, 6], [3,8]])
console.log(determinant([[1]]));
