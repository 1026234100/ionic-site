---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2/nightly"
path: ""
category: api
id: "{{SqlStorage | slugify}}"
title: "SqlStorage"
header_sub_title: "Class in module "
doc: "SqlStorage"
docType: "class"
---


<div class="improve-docs">
  <a href='http://github.com/driftyco/ionic2/tree/master/ionic/platform/storage/sql.ts#L4'>
    View Source
  </a>
  &nbsp;
  <a href='http://github.com/driftyco/ionic2/edit/master/ionic/platform/storage/sql.ts#L4'>
    Improve this doc
  </a>
</div>




<h1 class="api-title">

  SqlStorage



</h1>





<p>SqlStorage uses SQLite or WebSQL (development only!) to store data in a
persistent SQL store on the filesystem.</p>
<p>This is the preferred storage engine, as data will be stored in appropriate
app storage, unlike Local Storage which is treated differently by the OS.</p>
<p>For convenience, the engine supports key/value storage for simple get/set and blob
storage. The full SQL engine is exposed underneath through the <code>query</code> method.</p>


<h1 class="class export">SqlStorage <span class="type">class</span></h1>
<p class="module">exported from <a href='undefined'>ionic/ionic</a><br/>
defined in <a href="https://github.com/driftyco/ionic2/tree/master/ionic/platform/storage/sql.ts#L5-L203">ionic/platform/storage/sql.ts (line 5)</a>
</p>
## Members

<div id="query"></div>
<h2>
  <code>query(query, params)</code>

</h2>

Perform an arbitrary SQL operation on the database. Use this method
to have full control over the underlying database through SQL operations
like SELECT, INSERT, and UPDATE.




<table class="table" style="margin:0;">
  <thead>
    <tr>
      <th>Param</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>
        query
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>the query to run</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        params
        
        
      </td>
      <td>
        
  <code>array</code>
      </td>
      <td>
        <p>the additional params to use for query placeholders</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>Promise</code> that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}




<div id="get"></div>
<h2>
  <code>get(key)</code>

</h2>

Get the value in the database identified by the given key.



<table class="table" style="margin:0;">
  <thead>
    <tr>
      <th>Param</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>
        key
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>the key</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>Promise</code> that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}




<div id="set"></div>
<h2>
  <code>set(key, value)</code>

</h2>

Set the value in the database for the given key. Existing values will be overwritten.



<table class="table" style="margin:0;">
  <thead>
    <tr>
      <th>Param</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>
        key
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>the key</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        value
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The value (as a string)</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>Promise</code> that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}




<div id="remove"></div>
<h2>
  <code>remove(key, value)</code>

</h2>

Remove the value in the database for the given key.



<table class="table" style="margin:0;">
  <thead>
    <tr>
      <th>Param</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>
        key
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>the key</p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        value
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The value (as a string)</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>Promise</code> that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}




