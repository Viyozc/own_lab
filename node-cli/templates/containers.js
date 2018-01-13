import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { isEqual } from 'lodash'
import { Form, message, Button, notification } from 'antd'

import ContentComponent from 'components/common/content'

import Error from 'components/common/error'
import Loading from 'components/common/loading'
// import Style from './index.less'

import SearchQuery from 'components/common/searchQuery'
import TableDetail from 'components/common/tableComponent'

import { resetErrorMessage } from 'actions/error'
import actions from 'actions/<%pathHolder%>'

const offset = 0
const pageSize = 10

class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  componentWillMount () {
    // Style.use()
  }
  componentDidMount () {
    this.props.actions.fetchIndexList({offset, pageSize})
  }
  render () {
    const { list, params, actions, loaction, totalCount, error } = this.props
    if (!list) {
      return error ?  <Error>{this.props.error.message || '未知错误'}</Error> : <Loading />
    }

    const column = [
      {
        title: 'test',
        dataIndex: 'gmtCreate',
        width: 150
      },
      {
        title: 'test',
        dataIndex: 'billNo',
        width: 150
      },
      {
        title: '操作',
        dataIndex: 'oper',
        width: 100,
        render: (text, record) => (
          <div>
            <Button onClick={() => {}}>查看详情</Button>
          </div>
        )
      }
    ]
    const TableProps = {
      location,
      error,
      column,
      tableReset: this.state.tableReset,
      offset: true,
      list: list,
      fetchList: actions.fetchIndexList,
      totalCount
    }

    const searchConfig = [
      {
        key: 'name',
        label: '名称'
      },
      {
        key: 'status',
        label: '状态'
      }
    ]

    return (
      <ContentComponent className='container'>
        <SearchQuery
          config={searchConfig}
          location={this.props.location}
        />
        <TableDetail
          {...TableProps}
        />
      </ContentComponent>
    )
  }
  componentWillReceiveProps (nextProps) {
    if (!isEqual(this.props.location.query, nextProps.location.query)) {
      this.props.actions.fetchIndexList({...nextProps.location.query, offset: 0, pageSize: 10})
    }
    if (!this.props.error && nextProps.error && this.props.list) {
      message.error(nextProps.error.message)
      this.props.actions.resetErrorMessage()
      this.setState({modalLoading: false})
    }
    if (!this.props.handlePost && nextProps.handlePost) {
      this.setState({ modalLoading: false, showModal: false, tableReset: false })
      notification.success({
        message: '通知',
        description: '操作成功.'
      })
    }
  }
  componentWillUnmount () {
    // Style.unuse()
    this.props.actions.resetErrorMessage()
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    error: state.errorMessage,
    ...state.<%camelHolder%>Page
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({...actions, resetErrorMessage}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
