describe('cypress hooks', () => { 
  before(()=>{
   // runs once before all tests in the block
  }) 

  after(()=>{
   // runs after each test in the block     
  }) 

  beforeEach(()=>{
   // runs before test in the block 
  }) 

  afterEach(()=>{
   // runs once after all tests in the block 
  }) 
  
  
  //block of excution 
  it("Hook test 1", () =>{

    cy.visit("https://rahulshettyacademy.com/angularpractice/")

    cy.get("input[name='name']:nth-child(2)").type("bob")
    cy.get("select").select("Female")


  })
  it("handle table",()=>{ 
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    cy.get("tr td:nth-child(2)").each(($el,$index,$list)=>{
           let txt = $el.text()
          if(txt.includes('Receptionist')){
               cy.get("tr td:nth-child(2)").eq($index).prev().then((price)=>{
                  let m = price.text()
                  expect(m).to.be.equal('Ivory')
               })
          }
        })
  })
})