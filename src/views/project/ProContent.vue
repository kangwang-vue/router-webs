<template>
<div class="content">
    <div class="headline">
        <strong>发布版本</strong>
    </div>
    <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 10px ">
        </a-breadcrumb>
        <a-layout-content :style="{ background: '#fff', padding: '24px' }">
            <div class="head">
                <div class="components-input-demo-size">
                    版本号：
                    <a-input size="large" placeholder="请输入版本号" />
                    版本类型：
                    <a-input size="large" placeholder="请选择" />
                    状态：
                    <a-input size="large" placeholder="请选择" />
                    <a-button type="primary" style="margin-right:20px">搜索</a-button>
                    <a-button>重置</a-button>
                </div>
                <div class="button">
                    <a-button type="primary">新建日常版本</a-button>
                    <a-button style="margin-left:20px">新建热修复版本</a-button>
                </div>
            </div>
            <div class="contet-table">
                <a-table :columns="columns" :rowKey="record => record.login.uuid" :dataSource="data" :pagination="pagination" :loading="loading" @change="handleTableChange">
                    <template slot="name" slot-scope="name">
                        {{name.first}} {{name.last}}
                    </template>
                    <template slot="operate" slot-scope="text">
                        <a href="javascript:;">{{text}}</a>

                    </template>
                </a-table>
            </div>
        </a-layout-content>
    </a-layout>
</div>
</template>

<script>
import reqwest from 'reqwest';
const columns = [{
        title: 'Name',
        dataIndex: 'name',
        sorter: true,
        width: '20%',
        scopedSlots: {
            customRender: 'name'
        },
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        filters: [{
            text: 'Male',
            value: 'male'
        }, {
            text: 'Female',
            value: 'female'
        }],
        width: '20%',
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
    {
        title: '操作',
        dataIndex: 'cell',
         scopedSlots: {
            customRender: 'operate'
        },
    }


];

export default {
    mounted() {
        this.fetch();
    },
    data() {
        return {
            data: [],
            pagination: {},
            loading: false,
            columns,
        };
    },
    methods: {
        handleTableChange(pagination, filters, sorter) {
            console.log(pagination);
            const pager = {
                ...this.pagination
            };
            pager.current = pagination.current;
            this.pagination = pager;
            this.fetch({
                results: pagination.pageSize,
                page: pagination.current,
                sortField: sorter.field,
                sortOrder: sorter.order,
                ...filters,
            });
        },
        fetch(params = {}) {
            console.log('params:', params);
            this.loading = true;
            reqwest({
                url: 'https://randomuser.me/api',
                method: 'get',
                data: {
                    results: 10,
                    ...params,
                },
                type: 'json',
            }).then(data => {
                const pagination = {
                    ...this.pagination
                };
                // Read total count from server
                // pagination.total = data.totalCount;
                pagination.total = 200;
                this.loading = false;
                this.data = data.results;
                this.pagination = pagination;
            });
        },
    },
};
</script>

<style>
.content .headline {
    margin: 10px;
}

.components-input-demo-size .ant-input {
    width: 250px;
    margin: 0 8px 8px 0;
    margin-right: 50px;
}

.head .button {
    float: right;
    margin-right: 40px;
    margin: 20px;
}
</style>
