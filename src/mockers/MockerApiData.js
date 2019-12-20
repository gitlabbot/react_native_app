export const mocker = {
    index () {
        let mockRows = []
        mockRows.push({
          document: 'QTH000001',
          cust_name: 'NAME CUSTOMERS'
        }),
        mockRows.push({
          document: 'QTH000002',
          cust_name: 'NAME CUSTOMERS'
        }),
        mockRows.push({
          document: 'QTH000003',
          cust_name: 'NAME CUSTOMERS'
        }),
        mockRows.push({
          document: 'QTH000004',
          cust_name: 'NAME CUSTOMERS'
        }),
        mockRows.push({
          document: 'QTH000005',
          cust_name: 'NAME CUSTOMERS'
        }),
        mockRows.push({
          document: 'QTH000006',
          cust_name: 'NAME CUSTOMERS'
        })
        return {
          rows: mockRows
        }
      }
}