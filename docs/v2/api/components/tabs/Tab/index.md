---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2"
path: ""
category: api
id: "tab"
title: "Tab"
header_sub_title: "Class in module "
doc: "Tab"
docType: "class"
show_preview_device: true
preview_device_url: "/docs/v2/demos/tabs/"
angular_controller: APIDemoCtrl 
---









<h1 class="api-title">
<a class="anchor" name="tab" href="#tab"></a>

Tab






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/2.0//ionic/components/tabs/tab.ts#L9">
Improve this doc
</a>






<p>The Tab component, written <code>&lt;ion-tab&gt;</code>, is styled based on the mode and should
be used in conjunction with the <a href="../Tabs/">Tabs</a> component.</p>
<p>Each tab has a basic navigation controller. Similar to the <a href="../../nav/Nav/">Nav</a>
component, the tab navigation controller is a subclass of
<a href="../../nav/NavController">NavController</a>. It can be used to navigate and manipulate
pages in the navigation stack of the tab.</p>
<p>For more information on using navigation controllers like Tab or <a href="../../nav/Nav/">Nav</a>,
take a look at the <a href="../../nav/NavController/">NavController API Docs</a>.</p>
<p>See the <a href="../Tabs/">Tabs API Docs</a> for more details on configuring Tabs.</p>


<h2><a class="anchor" name="Component" href="#Component"></a>Component</h2>
<h3>selector: <code>ion-tab</code></h3>
<!-- @usage tag -->

<h2><a class="anchor" name="usage" href="#usage"></a>Usage</h2>

<p>For most cases, you can give tab a <code>[root]</code> property along with the component you want to load.</p>
<pre><code class="lang-html">&lt;ion-tabs&gt;
 &lt;ion-tab [root]=&quot;chatRoot&quot; tabTitle=&quot;Chat&quot; tabIcon=&quot;chat&quot;&gt;&lt;ion-tab&gt;
&lt;/ion-tabs&gt;
</code></pre>
<pre><code class="lang-ts">import {Chat} from &#39;../chat/chat&#39;;
export class Tabs {
   constructor(){
     // here we&#39;ll set the property of chatRoot to
     // the imported class of Chat
     this.chatRoot = Chat
   }
}
</code></pre>
<p>In other cases, you may not want to navigate to a new component, but just
call a method. You can use the <code>(select)</code> event to call a method on your
class. Below is an example of presenting a modal from one of the tabs.</p>
<pre><code class="lang-html">&lt;ion-tabs preloadTabs=&quot;false&quot;&gt;
  &lt;ion-tab (select)=&quot;chat()&quot;&gt;&lt;/ion-tab&gt;
&lt;/ion-tabs&gt;
</code></pre>
<pre><code class="lang-ts">export class Tabs {
  constructor(nav: NavController){
    this.nav = nav;
  }
  chat() {
    let modal = Modal.create(ChatPage);
    this.nav.present(modal);
  }
}
</code></pre>




<!-- @property tags -->



<!-- instance methods on the class -->
<!-- input methods on the class -->
<h2><a class="anchor" name="input-properties" href="#input-properties"></a>Input Properties</h2>
<table class="table param-table" style="margin:0;">
  <thead>
    <tr>
      <th>Attr</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>root</td>
      <td><code>Page</code></td>
      <td><p> Set the root page for this tab</p>
</td>
    </tr>
    
    <tr>
      <td>rootParams</td>
      <td><code>object</code></td>
      <td><p> Any nav-params you want to pass to the root page of the tab</p>
</td>
    </tr>
    
    <tr>
      <td>tabTitle</td>
      <td><code>string</code></td>
      <td><p> Set the title of this tab</p>
</td>
    </tr>
    
    <tr>
      <td>tabIcon</td>
      <td><code>string</code></td>
      <td><p> Set the icon for this tab</p>
</td>
    </tr>
    
    <tr>
      <td>tabBadge</td>
      <td><code>string</code></td>
      <td><p> Set the badge for this tab</p>
</td>
    </tr>
    
    <tr>
      <td>tabBadgeStyle</td>
      <td><code>string</code></td>
      <td><p> Set the badge color for this tab</p>
</td>
    </tr>
    
  </tbody>
</table>
<!-- output events on the class -->
<h2><a class="anchor" name="output-events" href="#output-events"></a>Output Events</h2>
<table class="table param-table" style="margin:0;">
  <thead>
    <tr>
      <th>Attr</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>select</td>
      <td><p> Method to call when the current tab is selected</p>
</td>
    </tr>
    
  </tbody>
</table><!-- related link -->

<h2><a class="anchor" name="related" href="#related"></a>Related</h2>

<a href='/docs/v2/components#tabs'>Tabs Component Docs</a>,
<a href='../../tabs/Tabs'>Tabs API Docs</a>,
<a href='../../nav/Nav'>Nav API Docs</a>,
<a href='../../nav/NavController'>NavController API Docs</a><!-- end content block -->


<!-- end body block -->

