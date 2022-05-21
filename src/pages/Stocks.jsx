import { stocks } from "../data.js"
import { Table } from "react-bootstrap";

console.log(stocks)

const Stocks = () => {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>
                            <h3>Company</h3>
                        </th>
                        <th>
                            <h3>Price</h3>
                        </th>
                        <th>
                            <h3>Change</h3>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        stocks.map((element, index) => {
                            return (

                                <tr>
                                    <td>
                                        <a href={`/stocks/${element.symbol}`}>
                                            <h4 key={`h1-stocks-${index}`}>{element.name}</h4>
                                        </a>
                                    </td>
                                    <td>
                                        <h4>{element.lastPrice}</h4>
                                    </td>
                                    <td>
                                        <h4 style={{ color: element.change > 0 ? "green" : "red" }}>{element.change}</h4>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </Table>

        </div >
    );
}

export default Stocks;