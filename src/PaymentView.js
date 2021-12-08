
export default function PaymentView(props){

    function showContent(food, summa){
        return(
            summa
        )
    }

    return(
        <div>
                <h3> your order: products </h3>
                <h3> total price: </h3>
                
                <label htmlFor=":"> Select a delivery location </label>
                <input type="text" name="delivery" id="delivery" />
                <br/><br/>

                <label htmlFor=":"> Special requests for your order </label>
                <br/>
                <textarea name="request" id="request" rows="3" cols="40"/>
                <br/><br/>

                <h3> Select a payment method</h3>

                <p>
                <label for="pay1"> Visa </label>
                <input type="radio" name="pay" id="pay1" value="Visa" />
                <br/><br/>

                <label for="pay2"> Mastercard </label>
                <input type="radio" name="pay" id="pay1" value="Mastercard" />
                <br/><br/>

                <label for="pay2"> American Express </label>
                <input type="radio" name="pay" id="pay1" value="AmericanExpress" />
                </p><br/>

                <h3> Enter your credit card information </h3>

                <label htmlFor=":"> Enter your  cardnumber </label>
                <input type="text" name="cardnumber" id="cardnumber" />
                <br/><br/>

                
                <label htmlFor=":"> Date of expiration </label>  
                <br/>
                <label htmlFor=":"> month  </label>
                <select name="month" id="month">
                <option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option>
                <option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option>
                <option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option>
                </select>

                <label htmlFor=":"> year  </label>
                <select name="year" id="year">
                <option value="01">21</option><option value="02">22</option><option value="03">23</option><option value="04">24</option><option value="04">25</option>
                <option value="04">26</option><option value="04">27</option>
                </select>

                <br/>
                <label htmlFor=":"> CVC </label>
                <textarea name="cardnumber" id="cardnumber" cols="3" rows="1"/>

                <br/><br/>
                <button > Submit order </button>
        </div>
    )
}