function Musaei(q) {
    // start timing
    const startTime = Date.now();
    // initialize variables
    let t = 0;
    let M_t = 1;
    let M_t_1 = 1;
    let M_t_minus_1 = 0;
  
    // check if q is less than or equal to 1
    if (q <= 1) {
      // end timing
      const endTime = Date.now();
      return "Never";
    }
  
    // loop until M_t is greater than or equal to q
    while (M_t < q) {
      // calculate next value of M_t based on the formula
      if (t % 2 === 0) {
        M_t = M_t_1 + M_t + t / 2;
        M_t_minus_1 = M_t_1;
        M_t_1 = M_t;
      } else {
        M_t = M_t_minus_1 + M_t_1 + 1;
      }
      // increment t
      t++;
    }
  
    // check if M_t is equal to q
    if (M_t === q) {
      // end timing
      const endTime = Date.now();
      return t;
    } else {
      // end timing
      const endTime = Date.now();
      return "Never";
    }
  }
  





  