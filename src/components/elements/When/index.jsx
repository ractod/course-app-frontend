const When = ({ truthy, fallback, children }) => truthy ? children  :  fallback || null

export default When;