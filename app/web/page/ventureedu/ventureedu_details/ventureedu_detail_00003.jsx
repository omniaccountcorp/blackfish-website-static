import React, {Component} from 'react';

export default () => {
  return (
    <div>
      <h3>什么是票据？</h3>
      <img src={require('../../../asset/images/ventureedu/票据.png')}/>
      <p>即承兑汇票，分为两类：银行承兑汇票和商业承兑汇票。</p>
      <p>A.银行承兑汇票：指的是银行承诺到期无条件兑付的票据，也就是见票即由承兑的银行来兑付。</p>
      <p>B.商业承兑汇票：是到期之后有所承诺兑付的商业企业来承诺兑付。</p>
      <p>大账户采用的都是电子商业承兑汇票，所有交易信息沉淀在央行的电子商业汇票系统内</p>
      <h3>商票如何流通？</h3>
      <p>商票要在市场上流通，必经一个仪式性手续——背书。背书按字面理解“背面书写”，持票人将汇票转让给他人是，
        要求在汇票背面书写记录转让的时间并盖章，这一步完成时，才算完成了票据的转让。
      </p>
      <p>在大账户平台上查看产品详情，一张是票据的金额和到期时间等信息，还有另一张则是票据的背书转让流转信息了。</p>
      <h3>我们通常所投资的票据理财产品是一个怎样的交易结构？</h3>
      <p>举个例子</p>
      <p>A企业为B核心企业常年供应配件，B会给A一张货款等值的6个月后兑付的商业承兑汇票。A企业采购原材料必须用现金支付，
        资金紧张面临现金流断裂危险。
      </p>
      <p>A将持有商票质押给与大账户合作的第三方商业保理公司，在大账户发起一笔与商票同等金额同等周期的借款，这时候出现了投资人C，
        手握资金通过大账户借给需要用钱的A企业，到期后由最后承兑人B企业无条件兑付，投资人获得本息收益。
      </p>
      <p>上述整个过程通常就是我们所谓的票据理财师理财交易结构。</p>
      <h3>风险？</h3>
      <p>商业企业承兑汇票由于各个商业企业信用等级不同，所以他们的兑付能力直接和承兑的商业企业的信用挂钩，因此每张不同承兑人
        所承兑的商业承兑汇票风险是不一样的。
      </p>
      <p>目前大账户采用的都是以大型央企、国企、上市公司作为承兑人的商业票据。</p>
      <p>因为这些企业基本上属于公众公司，他们的兑付风险相对是比较小的。也就是说我们持有这样的票据到期了，
        问这样的承兑人去拿回他所承诺兑付的现金，风险相对比较小。
      </p>
      <h3>怎么辨别票据的真假？票据为什么都是长期的标？这个期限是怎么定的？</h3>
      <p>我们现在所有的票据都是电子票据。那电子票据其实是在人民银行的电子票据系统里面，叫ECDS。我们所指的现在的商业承兑汇票逻辑
        的都是要持有到期这张票据。只有当票据到期之后才能实现我们的收益，那也就是说我们的票据的期限一般都是和它付款账期是一致的，
        一般的账期可能都是三个月到六个月之间。这就意味着我们平台上的标的都是和它的账期所匹配的。
      </p>
      <h3>怎么样才可以知道这个大型企业是不是央企国企？</h3>
      <p>我们的所有企业，它的股东背景都是在工商网站上能够查到的。而且我们现在所做的这些票据的承兑人，基本上都是在上市公司或者在
        中国债券网上面都有记录的。
      </p>
    </div>
  );
}