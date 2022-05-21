import { stocks } from "../data";
import { useParams } from "react-router-dom";

const StockDetails = () => {
    const { symbol } = useParams();
    const foundSymbol = stocks.find(element => element.symbol === symbol)
    return (
        <div className="stock-details">
            {
                foundSymbol && <div>
                    <h5>Name: {foundSymbol.name}</h5> <br />
                    <h5>Symbol: {foundSymbol.symbol}</h5><br />
                    <h5>Last Price: {foundSymbol.lastPrice}</h5> <br />
                    <h5>Change: {foundSymbol.change}</h5><br />
                    <h5>High: {foundSymbol.high}</h5><br />
                    <h5>Low: {foundSymbol.low}</h5><br />
                    <h5>Open: {foundSymbol.open}</h5><br />
                </div>
            }

        </div>
    );
}

export default StockDetails;