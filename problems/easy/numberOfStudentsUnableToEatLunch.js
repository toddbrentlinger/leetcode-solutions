/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 * Runtime: 46ms (83.76%)
 * Memory: 41.94MB (57.88%)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
var countStudents = function(students, sandwiches) {
    // iStudent, iSandwich - indices for arrays
    // i0, i1 - Number of each student type initially moved to end of line
    let iStudent = iSandwich = i0 = i1 = 0;

    // Looping through each student once, find how many of each type have to move
    // to end of the line
    while (iStudent < students.length) {
        // If front student wants top stack sandwich, increment sandwich index
        if (students[iStudent] === sandwiches[iSandwich]) {
            iSandwich++;
        } else if (students[iStudent]) { // Else If student wants 1-val sandwich, increment count
            i1++;
        } else { // Else student wants 0-val sandwich, increment count
            i0++;
        }

        // Increment student index
        iStudent++;
    }

    // Looping through remaining sandwiches, find how many remaining students get sandwich
    while (iSandwich < sandwiches.length) {
        // If sandwich is 1-val type
        if (sandwiches[iSandwich]) {
            // If 1-val type has count greater than zero, decrement count
            if (i1) {
                i1--;
            } else { // Else no more 1-val type students, return i0 remaining students
                return i0;
            }
        } else { // Else sandwich is 0-val type
            // If 0-val type has count greater than zero, decrement count
            if (i0) {
                i0--;
            } else { // Else no more 0-val type students, return i1 remaining students
                return i1;
            }
        }
        iSandwich++;
    }
    
    // If reach here, all students got a sandwich
    return 0;
};

/**
i = student = 0
j = top sandwich = 0

i0 = zeros sent to end of line = 0
i1 = ones sent to end of line = 0

1,1,1,0,0,1 - 1,0,0,0,1,1
i             j
Front student takes sandwich, j++, i++

1,1,1,0,0,1 - 1,0,0,0,1,1
  i             j
Front student (1) goes to end of line, i++, ++i1=1

1,1,1,0,0,1 - 1,0,0,0,1,1
    i           j
Front student (1) goes to end of line, i++, ++i1=2

1,1,1,0,0,1 - 1,0,0,0,1,1
      i         j
Front student takes sandwich, j++, i++

1,1,1,0,0,1 - 1,0,0,0,1,1
        i         j
Front student takes sandwich, j++, i++

1,1,1,0,0,1 - 1,0,0,0,1,1
          i         j
Front student (1) goes to end of line, i++, ++i1=3

1,1,1,0,0,1 - 1,0,0,0,1,1
            i       j
Reach end of initial student line
i0=0
No i0 to take from
Break

Return i0+i1=3

-------------------------------------------------------------------------------
i = student = 0
j = top sandwich = 0

i0 = zeros sent to end of line = 0
i1 = ones sent to end of line = 0

1,1,0,0 - 0,1,0,1
i         j
Front student (1) goes to end of line, i++, ++i1=1

1,1,0,0 - 0,1,0,1
  i       j
Front student (1) goes to end of line, i++, ++i1=2

1,1,0,0 - 0,1,0,1
    i     j
Front student takes sandwich, j++, i++

1,1,0,0 - 0,1,0,1
      i     j
Front student (0) goes to end of line, i++, ++i0=1

1,1,0,0 - 0,1,0,1
            j
Reach end of initial student line 
i0=1 i1=2
i1--=1, j++

1,1,0,0 - 0,1,0,1
              j
i0=1 i1=1
i0--=0, j++

1,1,0,0 - 0,1,0,1
                j
i0=0 i1=1
i1--=0, j++

Reach end

Return i0 + i1 = 0

 */