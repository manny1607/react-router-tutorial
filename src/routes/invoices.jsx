import { Link, NavLink, Outlet, useLocation, useSearchParams } from "react-router-dom";
import { getInvoices } from "../data";
// import QueryNavLink from "./queryNavLink";

function QueryNavLink({to, ...props}) {
    console.log('props', props);
    let location = useLocation();

    return <NavLink
            style={({isActive}) => {
                return { 
                    display: "block",
                    margin: "1rem 0",
                    color: isActive ? "red": ""
                };    
            }}
            to={to + location.search} {...props}>
        {props.invoice.name}
    </NavLink>
}

export default function Invoices() {
    let invoices = getInvoices();
    let [searchParams, setSearchParams] = useSearchParams();
    return (
        <div style={{ display: "flex" }}>
            <nav
                style={{
                    borderRight: "solid 1px",
                    padding: "1rem"
                }}
            >
                <input 
                    value={searchParams.get('invoiceFilter') || ''}
                    onChange={(event) => {
                        let invoiceFilter = event.target.value;
                        if (invoiceFilter) {
                            setSearchParams({ invoiceFilter });
                        } else {
                            setSearchParams({});
                        }
                    }}
                />
                {invoices
                    .filter((invoice) => {
                        let filter = searchParams.get('invoiceFilter');
                        if (!filter) return true;
                        let name = invoice.name.toLowerCase();
                        return name.startsWith(filter.toLowerCase());
                    })
                    .map((invoice) => (
                        <QueryNavLink
                            to={`/invoices/${invoice.number}`} 
                            key={invoice.number} 
                            invoice={invoice}/>
                ))}
            </nav>
            <Outlet />
        </div>
    );
}