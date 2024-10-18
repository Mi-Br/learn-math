<script lang='ts'>    
    let inpH = 1
    let inpT = 2
    let inpE = 3
    
    let outH = 1
    let outT = 2
    let outE = 3
    
    // function generateNumber(len:number) {
    //  return Array.from({length: len}, (_,i)=>{
    //     return i == 0 ? Math.floor(Math.random()*9) + 1 : Math.floor(Math.random()*9)
    //  })
    // }
    
    // console.log(generateNumber(3).join('/'))
    </script>
    
    <h1>Challenge</h1>
    
    
    <div class="grid">
        <input style:grid-column=1 style:grid-row=1 value=1 type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
        <span style:grid-column=2 style:grid-row=1 >/</span>
        <input class="inp" style:grid-column=3 style:grid-row=1  type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
        <input class="inp" style:grid-column=4 style:grid-row=1 type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
        <input class="inp" style:grid-column=5 style:grid-row=1  type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
        <span  style:grid-column=6 style:grid-row=1 >\</span>
        <input class="outp" style:grid-column=7 style:grid-row=1  type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
        <input class="outp" style:grid-column=8 style:grid-row=1  type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
        <input class="outp"style:grid-column=9 style:grid-row=1   type="number" step="any" inputmode="numeric" pattern="[0-9]"/>  
        <input class='remainder' style:grid-column=10 style:grid-row=1  type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
    
    
        <input class="inp" style:grid-column=3 style:grid-row=2  type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
        <input class="inp" style:grid-column=4 style:grid-row=2 type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
        <input class="inp" style:grid-column=5 style:grid-row=2  type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
       
        <input class="inp" style:grid-column=3 style:grid-row=3  type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
        <input class="inp" style:grid-column=4 style:grid-row=3 type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
        <input class="inp" style:grid-column=5 style:grid-row=3  type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
       
        <input class="inp" style:grid-column=3 style:grid-row=4  type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
        <input class="inp" style:grid-column=4 style:grid-row=4 type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
        <input class="inp" style:grid-column=5 style:grid-row=4  type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
       
        <input class="inp" style:grid-column=3 style:grid-row=5  type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
        <input class="inp" style:grid-column=4 style:grid-row=5 type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
        <input class="inp" style:grid-column=5 style:grid-row=5  type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
       
        <input class="inp" style:grid-column=3 style:grid-row=6  type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
        <input class="inp" style:grid-column=4 style:grid-row=6 type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
        <input class="inp" style:grid-column=5 style:grid-row=6  type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
       
        <input class="inp" style:grid-column=3 style:grid-row=7  type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
        <input class="inp" style:grid-column=4 style:grid-row=7 type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
        <input class="inp" style:grid-column=5 style:grid-row=7  type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
       
    
    </div>
    
    <style>
     .remainder{
        margin-left: 40px;
        background-color: aqua;   
     }
      
     
     
     .grid {
            display: grid;
            grid-template-columns: repeat(10, 1fr);
            max-width: min-content;
        }
        
        * {
            font-size: x-large;
        }
    
        h1 {
            color: red;
        }
    
        input {
            width: 1ch;
            padding: 1em;
        }
    
        /* remove default increment bar */
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        /* Remove spinner for Firefox */
        input[type="number"] {
            -moz-appearance: textfield;
        }
         
    </style>
    
    
    
    
    