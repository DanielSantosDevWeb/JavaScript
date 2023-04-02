for (n1 = 0; n1 < 20; n1++) {
    console.log(n1);
    
    if (n1 > 10) {
        console.log('parou')
        break
        
    }
}

for ( n2 = 50 ; n2 < 100; n2 += 5 ) {
    
    
    if (n2 == 75) {
        console.log('pulou');
        continue
    }
    console.log(n2)
}