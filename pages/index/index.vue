<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title">扫码结果：</view>
			<view class="uni-list" v-if="result">
				<view class="uni-cell">
					<view class="scan-result">
						{{result}}
					</view>
				</view>
			</view>
			<view class="uni-btn-v">
				<button type="primary" @click="scan">扫一扫</button>
			</view>

			<view class="box">
				<view class="title">数据：</view>
				<t-table @change="change">
					<t-tr>
						<t-th>序号</t-th>
						<t-th style="flex: 3;">编码</t-th>
						<t-th>操作</t-th>
					</t-tr>
					<t-tr v-for="item in tableList" :key="item.id">
						<t-td>{{ item.id }}</t-td>
						<t-td style="flex: 3;">{{ item.code }}</t-td>
						<t-td><button @click="del(item)" class="del_bt">删除</button></t-td>
					</t-tr>
				</t-table>
				<view class="uni-btn-v" v-if="tableList.length != 0">
					<button type="primary" @click="output">导出数据</button>
				</view>
			</view>


		</view>
	</view>
</template>
<script>
	import tTable from '@/components/t-table/t-table.vue';
	import tTh from '@/components/t-table/t-th.vue';
	import tTr from '@/components/t-table/t-tr.vue';
	import tTd from '@/components/t-table/t-td.vue';

	export default {
		components: {
			tTable,
			tTh,
			tTr,
			tTd
		},
		data() {
			return {
				title: 'scanCode',
				result: '',
				tableList: []
			}
		},
		methods: {

			scan: function() {
				uni.scanCode({
					success: (res) => {
						this.result = res.result;
						this.tableList.push({
							'id': this.tableList.length + 1,
							'code': this.result
						});
					}
				});
			},
			change: function(e) {
				console.log(e.detail);
			},
			del: function(item) {
				let that = this;
				uni.showModal({
					title: "确认要删除吗？",
					success(e) {
						console.log(e.confirm);
						if (e.confirm) {
							let target = that.tableList.indexOf(item);
							that.tableList.splice(target, 1);
							for (let i = target; i < that.tableList.length; i++) {
								that.tableList[i].id = that.tableList[i].id - 1;
							};
							uni.showToast({
								title: "删除成功！"
							});
						} else {
							console.log("按了取消");
						}
					}
				})
			},
			output: function() {
				let that = this;
				uni.request({
					url: 'https://weixin.bigbigge.com/xiaogao/xiaogao.php',
					data: {
						list: JSON.stringify(this.tableList)
					},
					success: (res) => {
						uni.showModal({
							title: "导出成功！",
							content: "请到 ftp://weixin.bigbigge.com/ 下载",
							mask: true,
							showCancel: false,
							success() {
								that.tableList = []
							}
						})
					}
				})
			}
		}
	}
</script>

<style>
	.uni-common-mt {
		margin-top: 30upx;
	}

	.uni-padding-wrap {
		width: 690upx;
		padding: 0 30upx;
	}

	.uni-title {
		font-size: 30upx;
		font-weight: 500;
		padding: 20upx 0;
		line-height: 1.5;
	}

	.uni-list {
		background-color: #FFFFFF;
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.uni-list:after {
		position: absolute;
		z-index: 10;
		right: 0;
		bottom: 0;
		left: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.uni-list::before {
		position: absolute;
		z-index: 10;
		right: 0;
		top: 0;
		left: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.scan-result {
		min-height: 50upx;
		line-height: 50upx;
	}

	/* 竖向百分百按钮 */
	.uni-btn-v {
		padding: 10upx 0;
	}

	.uni-btn-v button {
		margin: 20upx 0;
	}

	.del_bt {
		font-size: 25upx;
	}
</style>
