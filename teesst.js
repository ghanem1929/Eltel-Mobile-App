/*import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DataTable, DataTableCell, DataTableRow, DataTablePagination } from 'material-bread';
import _ from "lodash"

export default function Table(){
  const [ columns, setColumns ] = useState([
    "Ref",
    "D_debut",
    "D_fin",
    "Reversement",
    "Reste",
    "Taux"
  ])
  const [ direction, setDirection ] = useState(null)
  const [ selectedColumn, setSelectedColumn ] = useState(null)
  const [ pets, setPets ] = useState(this.state.Data)
  const sortTable = (column) => {
    const newDirection = direction === "desc" ? "asc" : "desc" 
    const sortedData = _.orderBy(pets, [column],[newDirection])
    setSelectedColumn(column)
    setDirection(newDirection)
    setPets(sortedData)
  }
  const tableHeader = () => (
    <DataTableRow >
      {
        columns.map((column, index) => {
          {
          <DataTableCell key={index}  
              type={'header'} 
              borderRight 
              style={styleScale.tableHeaderCell}  
              onPress={()=> sortTable(column)}
              >
                <Text style={styles.columnHeaderTxt}>{column + " "} 
              { selectedColumn === column && <MaterialCommunityIcons 
                  name={direction === "desc" ? "arrow-down-drop-circle" : "arrow-up-drop-circle"} 
                />
              }
            </Text>
            </DataTableCell>
           
          }
        })
      }
      </DataTableRow >
  )
  return(
    <DataTable style={styleScale.tableContainer} >
            <DataTableRow columnHeaderTxt={tableHeader}></DataTableRow>
            <DataTableRow style={styleScale.tableRow} >
              <DataTableCell text={'Ref'} type={'header'} borderRight style={styleScale.tableHeaderCell}  />
              <DataTableCell text={'D_debut'} type={'header'}  style={styleScale.tableHeaderCell}/>
              <DataTableCell text={'D_fin'} type={'header'}  style={styleScale.tableHeaderCell}/>
              <DataTableCell text={'Reversement'} type={'header'}  style={styleScale.tableHeaderCell}/>
              <DataTableCell text={'Reste'} type={'header'}  style={styleScale.tableHeaderCell}/>
              <DataTableCell text={'Taux'} type={'header'}  style={styleScale.tableHeaderCell}/> 
            </DataTableRow>
            {this.state.Data
            .slice(
                this.state.page * this.state.perPage,
                this.state.page * this.state.perPage + this.state.perPage,
            )
            .map(row => (
            
                <DataTableRow key={row.Reference} style={styleScale.tableRow}>
                    <DataTableCell ><Text>{row.Reference}</Text></DataTableCell>
                    <DataTableCell ><Text>{row.Date_debut}</Text></DataTableCell>
                    <DataTableCell ><Text>{row.Date_fin}</Text></DataTableCell>
                    <DataTableCell ><Text>{row.Reversement}</Text></DataTableCell>
                    <DataTableCell ><Text>{row.Reste}</Text></DataTableCell>
                    <DataTableCell ><Text>{row.Taux}</Text></DataTableCell>
                </DataTableRow>  
            ))}
             <DataTablePagination
                page={this.state.page}
                numberOfPages={this.state.Data.length / this.state.perPage}
                numberOfRows={this.state.Data.length}
                perPage={this.state.perPage}
                onChangePage={page => this.setState({ page: page })}
                onChangeRowsPerPage={perPage => this.setState({ perPage: perPage })}
                possibleNumberPerPage={[2,3,4,5,6]}
            />
          </DataTable>
  )




  ///////


  <DataTable style={styleScale.tableContainer} >
            <DataTableRow style={styleScale.tableRow} >
              <DataTableCell text={'Rewxf'} type={'header'} borderRight style={styleScale.tableHeaderCell}  />
              <DataTableCell text={'D_debut'} type={'header'}  style={styleScale.tableHeaderCell}/>
              <DataTableCell text={'D_fin'} type={'header'}  style={styleScale.tableHeaderCell}/>
              <DataTableCell text={'Reversement'} type={'header'}  style={styleScale.tableHeaderCell}/>
              <DataTableCell text={'Reste'} type={'header'}  style={styleScale.tableHeaderCell}/>
              <DataTableCell text={'Taux'} type={'header'}  style={styleScale.tableHeaderCell}/> 
            </DataTableRow>
            {this.state.Data
            .slice(
                this.state.page * this.state.perPage,
                this.state.page * this.state.perPage + this.state.perPage,
            )
            .map(row => (
            
                <DataTableRow key={row.Reference} style={styleScale.tableRow}>
                    <DataTableCell text={row.Reference}  borderRight  style={styleScale.tableCell}/>
                    <DataTableCell text={row.Date_debut} style={styleScale.tableCell}/>
                    <DataTableCell text={row.Date_fin} style={styleScale.tableCell}/>
                    <DataTableCell text={row.Reversement} style={styleScale.tableCell}/>
                    <DataTableCell text={row.Reste} style={styleScale.tableCell}/>
                    <DataTableCell text={row.Taux} style={styleScale.tableCell}/> 
                </DataTableRow>  
            ))}
             <DataTablePagination
                page={this.state.page}
                numberOfPages={this.state.Data.length / this.state.perPage}
                numberOfRows={this.state.Data.length}
                perPage={this.state.perPage}
                onChangePage={page => this.setState({ page: page })}
                onChangeRowsPerPage={perPage => this.setState({ perPage: perPage })}
                possibleNumberPerPage={[2,3,4,5,6]}
            />
          </DataTable>
}*/
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import _ from "lodash"



export default function Tab(props) {
 
  const [ columns, setColumns ] = useState([
    "Reference",
    "Date_debut",
    "Date_fin",
    "Reste",
    "Reversements",
    "Taux"
  ])
  const [ direction, setDirection ] = useState(null)
  const [ selectedColumn, setSelectedColumn ] = useState(null)
  const [ data, setData ] = useState(props.qdata)
  const sortTable = (column) => {
    const newDirection = direction === "desc" ? "asc" : "desc" 
    const sortedData = _.orderBy(data, [column],[newDirection])
    setSelectedColumn(column)
    setDirection(newDirection)
    setData(sortedData)
  }
  
  const tableHeader = () => (
    <View style={styles.tableHeader}>
      {
        columns.map((column, index) => {
          {
            return (
              <TouchableOpacity 
                key={index}
                style={styles.columnHeader} 
                onPress={()=> sortTable(column)}>
                  <Text style={styles.columnHeaderTxt}>{column + " "} 
                    { selectedColumn === column && <MaterialCommunityIcons name={direction === "desc" ? "arrow-down" : "arrow-up"} size={8}/> }
                  </Text>
              </TouchableOpacity>
            )
          }
        })
      }
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList 
        data={data}
        style={{width:"95%"}}
        keyExtractor={(item, index) => index+""}
        ListHeaderComponent={tableHeader}
        stickyHeaderIndices={[0]}
        renderItem={({item, index})=> {
          return (
            <View style={{...styles.tableRow, backgroundColor: index % 2 == 1 ? "#ab70c2" : "#f8e6ff"}}>
              <Text style={{...styles.columnRowTxt}}>{item.Reference}</Text>
              <Text style={styles.columnRowTxt}>{item.Date_debut}</Text>
              <Text style={styles.columnRowTxt}>{item.Date_fin}</Text>
              <Text style={styles.columnRowTxt}>{item.Reste}</Text>
              <Text style={styles.columnRowTxt}>{item.Reversement}</Text>
              <Text style={styles.columnRowTxt}>{item.Taux}</Text>
            </View>
          )
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:30,
    
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#250233",
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    height: 50,
    
  },
  tableRow: {
    flexDirection: "row",
    height: 40,
    alignItems:"center",
    
  },
  columnHeader: {
    width:"16.6%",
    justifyContent: "center",
    alignItems:"center"
  },
  columnHeaderTxt: {
    color: "white",
    fontWeight: "bold",
    fontSize:8
  },
  columnRowTxt: {
    width:"16.6%",
    textAlign:"center",
    fontSize:8
  }
});