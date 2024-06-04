

    function sub(){
        event.preventDefault();
        let leaveCity = document.querySelector("#leaveCity").value;
        let leave = document.querySelector("#leave");

        let goingTO = document.querySelector("#goingTO").value;
        let going = document.querySelector("#going");

        let depdate = document.querySelector(".depdate").value;
        let deptaure = document.querySelector("#deptaure");

        let returnDate = document.querySelector(".returnDate").value;
        let ret = document.querySelector("#ret");

        let passNo = document.querySelector("#passNo").value;
        let pass = document.querySelector("#pass");


        // leave city validation
        
        if(leaveCity == ""){
            leave.innerHTML = 'Please enter a valid city Name'
            leave.style.color = 'red';

        }
        else{
            leave.innerHTML = ''
        }

        //going to validation 

       if(goingTO == ""){
        going.innerHTML = 'Please enter a valid city Name'
        going.style.color = 'red'
       }
       else{
        going.innerHTML = ''
       }

       //date and time validation
       if(depdate ==""){
        deptaure.innerHTML = 'Please select date and time to confirm your flight'
        deptaure.style.color = 'red'
       }
       else{
        deptaure.innerHTML = ''
       }

       //return data and time validation
       if(returnDate ==""){
        ret.innerHTML = ' Please select date and time to confirm your return journey time and date '
        ret.style.color = 'red'
       }
       else{
        ret.innerHTML = ''
       }

       //passenger validation

       if(passNo <= 0){
        pass.innerHTML = 'please elected atleast 1 passenger to book your flight'
        pass.style.color = 'red'


       }
       else{
        pass.innerHTML = ''

       }

      

    }