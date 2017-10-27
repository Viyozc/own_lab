import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import assign from 'object-assign'
import moment from 'moment'
import { Form, message, Button } from 'antd'

import ContentComponent from 'components/common/content'
import SearchComponent from 'components/common/search'
import TableComponent from 'components/common/table'
import Error from 'components/common/error'
import Loading from 'components/common/loading'
import Style from './style.less'

import Search from 'components/<%pathHolder%>/search'
import TableBox from 'components/<%pathHolder%>/table'

import { resetErrorMessage } from 'actions/error'
import * as actions from 'actions/<%pathHolder%>'

class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  componentWillMount () {
    Style.use()
  }
  componentDidMount () {

  }
  render () {
    const { params } = this.props
    if (!this.props.list && !this.props.error) {
      return <Loading />
    }
    if (this.props.error && !this.props.list) {
      return <Error>{this.props.error.message || '未知错误'}</Error>
    }
    const formData = {
      reqPlanNo: {
        temp: temp
      },
      reqPlanStartTimeStr: {
        value: temp ? moment(temp, 'YYYY-MM-DD') : undefined
      }
    }
    let SearchBox = Form.create({
      mapPropsToFields () {
        return formData
      }
    })(Search)
    return (
      <ContentComponent className='container'>
        <SearchComponent>
          <SearchBox />
        </SearchComponent>
        <TableComponent>
          <TableBox
            fetchList={this.props.actions.fetchIndexList}
            list={this.props.list}
            pagination={this.props.pagination}
          />
        </TableComponent>
      </ContentComponent>
    )
  }
  componentWillReceiveProps (nextProps) {

  }
  componentWillUnmount () {
    Style.unuse()
    this.props.actions.resetErrorMessage()
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    error: state.errorMessage,
    fetch: state.<%camelHolder%>ReducerIndexPage && state.<%camelHolder%>ReducerIndexPage.fetch
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({...actions, resetErrorMessage: resetErrorMessage}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
